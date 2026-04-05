import type{ Request, Response } from 'express';
import prisma from '../services/prisma.service.js';

export const getProfile = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { badges: true, followers: true, following: true },
    });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const followUser = async (req: Request, res: Response) => {
  try {
    const userId = String((req as any).user.id);
    const targetId = Array.isArray(req.params.targetId) ? req.params.targetId[0] : req.params.targetId;
    if (!targetId) return res.status(400).json({ error: 'Target user ID is required' });

    await prisma.follow.create({
      data: { followerId: userId, followingId: targetId },
    });
    res.status(201).json({ message: 'Followed' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const unfollowUser = async (req: Request, res: Response) => {
  try {
    const userId = String((req as any).user.id);
    const targetId = Array.isArray(req.params.targetId) ? req.params.targetId[0] : req.params.targetId;
    if (!targetId) return res.status(400).json({ error: 'Target user ID is required' });

    await prisma.follow.deleteMany({
      where: { followerId: userId, followingId: targetId },
    });
    res.json({ message: 'Unfollowed' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};