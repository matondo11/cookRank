import { Router } from 'express';
import { getProfile, followUser, unfollowUser } from '../controllers/user.controller.js';
import { authenticateToken } from '../middlewares/auth.middleware.js';
const router = Router();
router.get('/profile', authenticateToken, getProfile);
router.post('/follow/:targetId', authenticateToken, followUser);
router.delete('/follow/:targetId', authenticateToken, unfollowUser);
export default router;
//# sourceMappingURL=user.routes.js.map