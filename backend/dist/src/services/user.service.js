import prisma from './prisma.service.js';
export class UserService {
    async getProfile(userId) {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: {
                badges: true,
                followers: { include: { follower: { select: { id: true, name: true, avatar: true } } } },
                following: { include: { following: { select: { id: true, name: true, avatar: true } } } },
                _count: { select: { recipes: true, submissions: true, followers: true, following: true } }
            },
        });
        if (!user)
            throw new Error('User not found');
        return user;
    }
    async getUserById(userId) {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: {
                badges: true,
                followers: { include: { follower: { select: { id: true, name: true, avatar: true } } } },
                following: { include: { following: { select: { id: true, name: true, avatar: true } } } },
                _count: { select: { recipes: true, submissions: true, followers: true, following: true } }
            },
        });
        if (!user)
            throw new Error('User not found');
        return user;
    }
    async getUsers(page, limit, search) {
        const where = search
            ? {
                OR: [
                    { name: { contains: search, mode: 'insensitive' } },
                    { email: { contains: search, mode: 'insensitive' } },
                ],
            }
            : {};
        const users = await prisma.user.findMany({
            where,
            include: {
                badges: true,
                _count: { select: { recipes: true, submissions: true, followers: true, following: true } },
            },
            skip: (page - 1) * limit,
            take: limit,
            orderBy: { createdAt: 'desc' },
        });
        const total = await prisma.user.count({ where });
        return { users, total, pages: Math.ceil(total / limit) };
    }
    async updateProfile(userId, updates) {
        const user = await prisma.user.update({
            where: { id: userId },
            data: updates,
            include: { badges: true, _count: { select: { recipes: true, submissions: true } } },
        });
        return user;
    }
    async followUser(userId, targetUserId) {
        if (userId === targetUserId) {
            throw new Error('Cannot follow yourself');
        }
        const existingFollow = await prisma.follow.findUnique({
            where: { followerId_followingId: { followerId: userId, followingId: targetUserId } },
        });
        if (existingFollow) {
            throw new Error('Already following this user');
        }
        await prisma.follow.create({
            data: { followerId: userId, followingId: targetUserId },
        });
        await prisma.user.update({
            where: { id: userId },
            data: { followingCount: { increment: 1 } },
        });
        await prisma.user.update({
            where: { id: targetUserId },
            data: { followersCount: { increment: 1 } },
        });
        return { message: 'Followed successfully' };
    }
    async unfollowUser(userId, targetUserId) {
        const follow = await prisma.follow.findUnique({
            where: { followerId_followingId: { followerId: userId, followingId: targetUserId } },
        });
        if (!follow) {
            throw new Error('Not following this user');
        }
        await prisma.follow.delete({
            where: { followerId_followingId: { followerId: userId, followingId: targetUserId } },
        });
        await prisma.user.update({
            where: { id: userId },
            data: { followingCount: { decrement: 1 } },
        });
        await prisma.user.update({
            where: { id: targetUserId },
            data: { followersCount: { decrement: 1 } },
        });
        return { message: 'Unfollowed successfully' };
    }
    async getFollowers(userId, page, limit) {
        const followers = await prisma.follow.findMany({
            where: { followingId: userId },
            include: {
                follower: {
                    select: { id: true, name: true, avatar: true, _count: { select: { followers: true } } },
                },
            },
            skip: (page - 1) * limit,
            take: limit,
            orderBy: { createdAt: 'desc' },
        });
        const total = await prisma.follow.count({ where: { followingId: userId } });
        return { followers, total, pages: Math.ceil(total / limit) };
    }
    async getFollowing(userId, page, limit) {
        const following = await prisma.follow.findMany({
            where: { followerId: userId },
            include: {
                following: {
                    select: { id: true, name: true, avatar: true, _count: { select: { followers: true } } },
                },
            },
            skip: (page - 1) * limit,
            take: limit,
            orderBy: { createdAt: 'desc' },
        });
        const total = await prisma.follow.count({ where: { followerId: userId } });
        return { following, total, pages: Math.ceil(total / limit) };
    }
}
export const userService = new UserService();
//# sourceMappingURL=user.service.js.map