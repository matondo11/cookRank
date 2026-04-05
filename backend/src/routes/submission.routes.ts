import { Router } from 'express';
import {
  submitRecipe,
  getSubmission,
  getSubmissionById,
  updateSubmission,
  deleteSubmission
} from '../controllers/submission.controller.js';
import { authenticateToken } from '../middlewares/auth.middleware.js';

const router = Router();

// Public routes
router.get('/', getSubmissions);
router.get('/:submissionId', getSubmissionById);

// Protected routes
router.post('/', authenticateToken, submitRecipe);
router.put('/:submissionId', authenticateToken, updateSubmission);
router.delete('/:submissionId', authenticateToken, deleteSubmission);

export default router;