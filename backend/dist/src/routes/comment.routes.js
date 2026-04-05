import { Router } from 'express';
import { body, param } from 'express-validator';
import { createComment, getCommentsBySubmission, updateComment, deleteComment } from '../controllers/comment.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validateRequest } from '../middlewares/validate.middleware.js';
const router = Router();
// All comment routes require authentication
router.use(authenticate);
// Get comments for a submission
router.get('/:submissionId', param('submissionId').isUUID().withMessage('Invalid submission ID'), validateRequest, getCommentsBySubmission);
// Create a new comment
router.post('/:submissionId', param('submissionId').isUUID().withMessage('Invalid submission ID'), body('content').trim().isLength({ min: 1, max: 1000 }).withMessage('Comment must be 1-1000 characters'), validateRequest, createComment);
// Update a comment
router.put('/:commentId', param('commentId').isUUID().withMessage('Invalid comment ID'), body('content').trim().isLength({ min: 1, max: 1000 }).withMessage('Comment must be 1-1000 characters'), validateRequest, updateComment);
// Delete a comment
router.delete('/:commentId', param('commentId').isUUID().withMessage('Invalid comment ID'), validateRequest, deleteComment);
export default router;
//# sourceMappingURL=comment.routes.js.map