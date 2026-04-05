import type { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { submissionService } from '../services/submission.service.js';

export const submitRecipe = [
  body('recipeId').isUUID().withMessage('Valid recipe ID is required'),
  body('imageUrl').isURL().withMessage('Valid image URL is required'),
  body('caption').optional().isLength({ max: 500 }).withMessage('Caption must be at most 500 characters'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const userId = String(req.user?.id ?? '');
      const { recipeId, imageUrl, caption } = req.body;

      const submission = await submissionService.submitRecipe(userId, recipeId, imageUrl, caption);
      res.status(201).json(submission);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to submit recipe';
      res.status(error instanceof Error && message.includes('not found') ? 404 : 400).json({ error: message });
    }
  }
];

export const getSubmissions = async (req: Request, res: Response) => {
  try {
    const page = parseInt(String(req.query.page ?? '1'), 10) || 1;
    const limit = parseInt(String(req.query.limit ?? '20'), 10) || 20;
    const userId = req.query.userId ? String(req.query.userId) : undefined;
    const recipeId = req.query.recipeId ? String(req.query.recipeId) : undefined;

    const { submissions, total, pages } = await submissionService.getSubmissions(page, limit, userId, recipeId);

    res.json({
      submissions,
      pagination: { page, limit, total, pages }
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getSubmissionById = async (req: Request, res: Response) => {
  try {
    const submissionId = String(req.params.submissionId);
    const submission = await submissionService.getSubmissionById(submissionId);
    res.json(submission);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Internal server error';
    res.status(error instanceof Error && message.includes('not found') ? 404 : 500).json({ error: message });
  }
};

export const updateSubmission = [
  body('caption').optional().isLength({ max: 500 }).withMessage('Caption must be at most 500 characters'),
  body('visibility').optional().isIn(['private', 'public']).withMessage('Visibility must be private or public'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const submissionId = String(req.params.submissionId);
      const userId = String(req.user?.id ?? '');
      const { caption, visibility } = req.body;

      const updatedSubmission = await submissionService.updateSubmission(submissionId, userId, { caption, visibility });
      res.json(updatedSubmission);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to update submission';
      res.status(error instanceof Error && message.includes('not authorized') ? 403 : 400).json({ error: message });
    }
  }
];

export const deleteSubmission = async (req: Request, res: Response) => {
  try {
    const submissionId = String(req.params.submissionId);
    const userId = String(req.user?.id ?? '');

    const result = await submissionService.deleteSubmission(submissionId, userId);
    res.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to delete submission';
    res.status(error instanceof Error && message.includes('not authorized') ? 403 : 400).json({ error: message });
  }
};