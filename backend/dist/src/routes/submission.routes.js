import { Router } from 'express';
import { submitRecipe, getSubmissions } from '../controllers/submission.controller.js';
import { authenticateToken } from '../middlewares/auth.middleware.js';
const router = Router();
router.post('/', authenticateToken, submitRecipe);
router.get('/', getSubmissions);
export default router;
//# sourceMappingURL=submission.routes.js.map