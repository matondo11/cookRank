import type { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { userService } from '../services/user.service.js';

export const getProfile = async (req: Request, res: Response) => {
  try {
    const userId = String(req.user?.id ?? '');
    const user = await userService.getProfile(userId);
    res.json(user);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Internal server error';
    res.status(error instanceof Error && error.message.includes('not found') ? 404 : 500).json({ error: message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = String(req.params.userId);
    const user = await userService.getUserById(userId);
    res.json(user);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Internal server error';
    res.status(error instanceof Error && error.message.includes('not found') ? 404 : 500).json({ error: message });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const page = parseInt(String(req.query.page ?? '1'), 10) || 1;
    const limit = parseInt(String(req.query.limit ?? '10'), 10) || 10;
    const search = req.query.search ? String(req.query.search) : undefined;

    const { users, total, pages } = await userService.getUsers(page, limit, search);

    res.json({
      users,
      pagination: { page, limit, total, pages }
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateProfile = [
  body('name').optional().isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('avatar').optional().isURL().withMessage('Valid image URL is required'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const userId = String(req.user?.id ?? '');
      const { name, avatar } = req.body;

      const updatedUser = await userService.updateProfile(userId, { name, avatar });
      res.json(updatedUser);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to update profile';
      res.status(400).json({ error: message });
    }
  }
];

export const followUser = async (req: Request, res: Response) => {
  try {
    const userId = String(req.user?.id ?? '');
    const targetId = String(req.params.targetId);

    const result = await userService.followUser(userId, targetId);
    res.status(201).json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to follow user';
    res.status(error instanceof Error && message.includes('Cannot follow') ? 400 : 404).json({ error: message });
  }
};

export const unfollowUser = async (req: Request, res: Response) => {
  try {
    const userId = String(req.user?.id ?? '');
    const targetId = String(req.params.targetId);

    const result = await userService.unfollowUser(userId, targetId);
    res.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to unfollow user';
    res.status(400).json({ error: message });
  }
};

export const getFollowers = async (req: Request, res: Response) => {
  try {
    const userId = String(req.params.userId);
    const page = parseInt(String(req.query.page ?? '1'), 10) || 1;
    const limit = parseInt(String(req.query.limit ?? '20'), 10) || 20;

    const { followers, total, pages } = await userService.getFollowers(userId, page, limit);
    res.json({ followers, pagination: { page, limit, total, pages } });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getFollowing = async (req: Request, res: Response) => {
  try {
    const userId = String(req.params.userId);
    const page = parseInt(String(req.query.page ?? '1'), 10) || 1;
    const limit = parseInt(String(req.query.limit ?? '20'), 10) || 20;

    const { following, total, pages } = await userService.getFollowing(userId, page, limit);
    res.json({ following, pagination: { page, limit, total, pages } });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};