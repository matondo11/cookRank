import { Router } from 'express';
import { param } from 'express-validator';
import { likeSubmission, unlikeSubmission, getLikesBySubmission } from '../controllers/like.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validateRequest } from '../middlewares/validate.middleware.js';

const router = Router();

// All like routes require authentication
router.use(authenticate);

// Get likes for a submission
router.get('/:submissionId',
  param('submissionId').isUUID().withMessage('Invalid submission ID'),
  validateRequest,
  getLikesBySubmission
);

// Like a submission
router.post('/:submissionId',
  param('submissionId').isUUID().withMessage('Invalid submission ID'),
  validateRequest,
  likeSubmission
);

// Unlike a submission
router.delete('/:submissionId',
  param('submissionId').isUUID().withMessage('Invalid submission ID'),
  validateRequest,
  unlikeSubmission
);

export default router;