import { Router } from 'express';
import {
  getProfile,
  getUserById,
  getUsers,
  updateProfile,
  followUser,
  unfollowUser,
  getFollowers,
  getFollowing
} from '../controllers/user.controller.js';
import { authenticateToken } from '../middlewares/auth.middleware.js';

const router = Router();

// Protected routes
router.get('/profile/me', authenticateToken, getProfile);
router.put('/profile/me', authenticateToken, updateProfile);

// Follow operations
router.post('/:userId/follow', authenticateToken, followUser);
router.delete('/:userId/follow', authenticateToken, unfollowUser);
router.get('/:userId/followers', getFollowers);
router.get('/:userId/following', getFollowing);

// Public routes
router.get('/', getUsers);
router.get('/:userId', getUserById);

export default router;