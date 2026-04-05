import { body, validationResult } from 'express-validator';
import { authService } from '../services/auth.service.js';
import { config } from '../config.js';
const REFRESH_COOKIE_OPTIONS = {
    httpOnly: true,
    secure: config.nodeEnv === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    path: '/',
};
const getRefreshTokenFromRequest = (req) => {
    return req.cookies?.refreshToken || req.body?.refreshToken;
};
export const register = [
    body('email').isEmail().withMessage('Valid email is required'),
    body('name').notEmpty().withMessage('Name is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const { email, name, password } = req.body;
            const result = await authService.register(email, name, password);
            res.cookie('refreshToken', result.refreshToken, REFRESH_COOKIE_OPTIONS);
            res.status(201).json({ accessToken: result.accessToken });
        }
        catch (error) {
            const message = error instanceof Error ? error.message : 'Registration failed';
            res.status(400).json({ error: message });
        }
    },
];
export const login = [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required'),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const { email, password } = req.body;
            const result = await authService.login(email, password);
            res.cookie('refreshToken', result.refreshToken, REFRESH_COOKIE_OPTIONS);
            res.json({ accessToken: result.accessToken });
        }
        catch (error) {
            const message = error instanceof Error ? error.message : 'Login failed';
            res.status(401).json({ error: message });
        }
    },
];
export const refresh = [
    async (req, res) => {
        const refreshToken = getRefreshTokenFromRequest(req);
        if (!refreshToken) {
            return res.status(400).json({ error: 'Refresh token is required' });
        }
        try {
            const result = await authService.refreshTokens(refreshToken);
            res.cookie('refreshToken', result.refreshToken, REFRESH_COOKIE_OPTIONS);
            res.json({ accessToken: result.accessToken });
        }
        catch (error) {
            const message = error instanceof Error ? error.message : 'Refresh failed';
            res.status(401).json({ error: message });
        }
    },
];
export const logout = [
    async (req, res) => {
        const refreshToken = getRefreshTokenFromRequest(req);
        if (!refreshToken) {
            return res.status(400).json({ error: 'Refresh token is required' });
        }
        try {
            await authService.logout(refreshToken);
            res.clearCookie('refreshToken', REFRESH_COOKIE_OPTIONS);
            res.status(204).send();
        }
        catch (error) {
            const message = error instanceof Error ? error.message : 'Logout failed';
            res.status(400).json({ error: message });
        }
    },
];
//# sourceMappingURL=auth.controller.js.map