import type { Request, Response } from 'express';
import prisma from '../services/prisma.service.js';
import bcrypt from 'bcrypt';
import { body, validationResult } from 'express-validator';

export const getProfile = async (req: Request, res: Response) => {
  try {
    const userId = String(req.user?.id ?? '');
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        badges: true,
        followers: { include: { follower: true } },
        following: { include: { following: true } },
        _count: { select: { recipes: true, submissions: true } }
      },
    });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        badges: true,
        followers: { include: { follower: true } },
        following: { include: { following: true } },
        _count: { select: { recipes: true, submissions: true } }
      },
    });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const search = req.query.search as string;

    const where = search ? {
      OR: [
        { name: { contains: search, mode: 'insensitive' as const } },
        { email: { contains: search, mode: 'insensitive' as const } }
      ]
    } : {};

    const users = await prisma.user.findMany({
      where,
      include: {
        badges: true,
        _count: { select: { recipes: true, submissions: true, followers: true, following: true } }
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: 'desc' }
    });

    const total = await prisma.user.count({ where });

    res.json({
      users,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateProfile = [
  body('name').optional().isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('email').optional().isEmail().withMessage('Valid email is required'),
  body('currentPassword').optional().exists().withMessage('Current password is required to change password'),
  body('newPassword').optional().isLength({ min: 6 }).withMessage('New password must be at least 6 characters'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const userId = String(req.user?.id ?? '');
      const { name, email, currentPassword, newPassword, avatar } = req.body;

      const user = await prisma.user.findUnique({ where: { id: userId } });
      if (!user) return res.status(404).json({ error: 'User not found' });

      // Check if email is already taken
      if (email && email !== user.email) {
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) return res.status(400).json({ error: 'Email already in use' });
      }

      // Verify current password if changing password
      if (newPassword) {
        if (!currentPassword) {
          return res.status(400).json({ error: 'Current password is required' });
        }
        const isValidPassword = await bcrypt.compare(currentPassword, user.password);
        if (!isValidPassword) {
          return res.status(400).json({ error: 'Current password is incorrect' });
        }
      }

      const updateData: any = {};
      if (name) updateData.name = name;
      if (email) updateData.email = email;
      if (avatar !== undefined) updateData.avatar = avatar;
      if (newPassword) updateData.password = await bcrypt.hash(newPassword, 10);

      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: updateData,
        include: { badges: true }
      });

      res.json({
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        avatar: updatedUser.avatar
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
];

export const deleteAccount = async (req: Request, res: Response) => {
  try {
    const userId = String(req.user?.id ?? '');
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ error: 'Password is required to delete account' });
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ error: 'Password is incorrect' });
    }

    // Soft delete - mark as deleted instead of actually deleting
    await prisma.user.update({
      where: { id: userId },
      data: { email: `deleted_${Date.now()}@${user.email.split('@')[1]}` }
    });

    res.json({ message: 'Account deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const followUser = async (req: Request, res: Response) => {
  try {
    const userId = String(req.user?.id ?? '');
    const targetId = Array.isArray(req.params.targetId) ? req.params.targetId[0] : req.params.targetId;
    if (!targetId) return res.status(400).json({ error: 'Target user ID is required' });
    if (userId === targetId) return res.status(400).json({ error: 'Cannot follow yourself' });

    const targetUser = await prisma.user.findUnique({ where: { id: targetId } });
    if (!targetUser) return res.status(404).json({ error: 'Target user not found' });

    const existingFollow = await prisma.follow.findUnique({
      where: { followerId_followingId: { followerId: userId, followingId: targetId } }
    });

    if (existingFollow) {
      return res.status(400).json({ error: 'Already following this user' });
    }

    await prisma.follow.create({
      data: { followerId: userId, followingId: targetId },
    });

    res.status(201).json({ message: 'Followed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const unfollowUser = async (req: Request, res: Response) => {
  try {
    const userId = String(req.user?.id ?? '');
    const targetId = Array.isArray(req.params.targetId) ? req.params.targetId[0] : req.params.targetId;
    if (!targetId) return res.status(400).json({ error: 'Target user ID is required' });

    const deleted = await prisma.follow.deleteMany({
      where: { followerId: userId, followingId: targetId },
    });

    if (deleted.count === 0) {
      return res.status(400).json({ error: 'Not following this user' });
    }

    res.json({ message: 'Unfollowed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};