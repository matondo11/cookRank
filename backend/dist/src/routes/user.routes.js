import { Router } from 'express';
import { getProfile, getUserById, getUsers, updateProfile, deleteAccount, followUser, unfollowUser } from '../controllers/user.controller.js';
import { authenticateToken } from '../middlewares/auth.middleware.js';
const router = Router();
// Public routes
router.get('/', getUsers);
router.get('/:userId', getUserById);
// Protected routes
router.get('/profile/me', authenticateToken, getProfile);
router.put('/profile/me', authenticateToken, updateProfile);
router.delete('/profile/me', authenticateToken, deleteAccount);
router.post('/follow/:targetId', authenticateToken, followUser);
router.delete('/follow/:targetId', authenticateToken, unfollowUser);
export default router;
//# sourceMappingURL=user.routes.js.map