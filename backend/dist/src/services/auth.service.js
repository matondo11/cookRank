import prisma from './prisma.service.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { config } from '../config.js';
const ACCESS_TOKEN_EXPIRES_IN = '1h';
const REFRESH_TOKEN_EXPIRES_DAYS = 7;
export class AuthService {
    async register(email, name, password) {
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            throw new Error('User already exists');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
            },
        });
        const accessToken = this.generateAccessToken(user.id, user.email);
        const refreshToken = await this.createRefreshToken(user.id);
        return { accessToken, refreshToken };
    }
    async login(email, password) {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            throw new Error('Invalid credentials');
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw new Error('Invalid credentials');
        }
        const accessToken = this.generateAccessToken(user.id, user.email);
        const refreshToken = await this.createRefreshToken(user.id);
        return { accessToken, refreshToken };
    }
    async refreshTokens(refreshToken) {
        const stored = await prisma.refreshToken.findUnique({ where: { token: refreshToken } });
        if (!stored || stored.expiresAt < new Date()) {
            throw new Error('Invalid refresh token');
        }
        const user = await prisma.user.findUnique({ where: { id: stored.userId } });
        if (!user) {
            throw new Error('Invalid refresh token');
        }
        const accessToken = this.generateAccessToken(user.id, user.email);
        const newRefreshToken = await this.rotateRefreshToken(stored.id, user.id);
        return { accessToken, refreshToken: newRefreshToken };
    }
    async logout(refreshToken) {
        await prisma.refreshToken.deleteMany({ where: { token: refreshToken } });
    }
    async createRefreshToken(userId) {
        const token = crypto.randomBytes(64).toString('hex');
        const expiresAt = new Date(Date.now() + REFRESH_TOKEN_EXPIRES_DAYS * 24 * 60 * 60 * 1000);
        await prisma.refreshToken.create({
            data: {
                token,
                userId,
                expiresAt,
            },
        });
        return token;
    }
    async rotateRefreshToken(tokenId, userId) {
        const token = crypto.randomBytes(64).toString('hex');
        const expiresAt = new Date(Date.now() + REFRESH_TOKEN_EXPIRES_DAYS * 24 * 60 * 60 * 1000);
        await prisma.refreshToken.update({
            where: { id: tokenId },
            data: {
                token,
                expiresAt,
            },
        });
        return token;
    }
    generateAccessToken(userId, email) {
        return jwt.sign({ id: userId, email }, config.jwtSecret, { expiresIn: ACCESS_TOKEN_EXPIRES_IN });
    }
}
export const authService = new AuthService();
//# sourceMappingURL=auth.service.js.map