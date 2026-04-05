import type { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { commentService } from '../services/comment.service.js';

export const createComment = [
  body('content').trim().isLength({ min: 1, max: 1000 }).withMessage('Comment must be 1-1000 characters'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const userId = String(req.user?.id ?? '');
      const submissionId = String(req.params.submissionId);
      const { content } = req.body;

      const comment = await commentService.createComment(userId, submissionId, content);
      res.status(201).json(comment);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to create comment';
      res.status(error instanceof Error && message.includes('not found') ? 404 : 400).json({ error: message });
    }
  }
];

export const getCommentsBySubmission = async (req: Request, res: Response) => {
  try {
    const submissionId = String(req.params.submissionId);
    const page = parseInt(String(req.query.page ?? '1'), 10) || 1;
    const limit = parseInt(String(req.query.limit ?? '20'), 10) || 20;

    const { comments, total, pages } = await commentService.getCommentsBySubmission(submissionId, page, limit);
    res.json({ comments, pagination: { page, limit, total, pages } });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateComment = [
  body('content').trim().isLength({ min: 1, max: 1000 }).withMessage('Comment must be 1-1000 characters'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const commentId = String(req.params.commentId);
      const userId = String(req.user?.id ?? '');
      const { content } = req.body;

      const updatedComment = await commentService.updateComment(commentId, userId, content);
      res.json(updatedComment);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to update comment';
      res.status(error instanceof Error && message.includes('not authorized') ? 403 : 400).json({ error: message });
    }
  }
];

export const deleteComment = async (req: Request, res: Response) => {
  try {
    const commentId = String(req.params.commentId);
    const userId = String(req.user?.id ?? '');

    const result = await commentService.deleteComment(commentId, userId);
    res.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to delete comment';
    res.status(error instanceof Error && message.includes('not authorized') ? 403 : 400).json({ error: message });
  }
};