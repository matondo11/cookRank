import type { Request, Response } from 'express';
import { likeService } from '../services/like.service.js';

export const likeSubmission = async (req: Request, res: Response) => {
  try {
    const userId = String(req.user?.id ?? '');
    const submissionId = String(req.params.submissionId);

    const like = await likeService.likeSubmission(userId, submissionId);
    res.status(201).json(like);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to like submission';
    res.status(error instanceof Error && message.includes('not found') ? 404 : 400).json({ error: message });
  }
};

export const unlikeSubmission = async (req: Request, res: Response) => {
  try {
    const userId = String(req.user?.id ?? '');
    const submissionId = String(req.params.submissionId);

    const result = await likeService.unlikeSubmission(userId, submissionId);
    res.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to unlike submission';
    res.status(400).json({ error: message });
  }
};

export const getLikesBySubmission = async (req: Request, res: Response) => {
  try {
    const submissionId = String(req.params.submissionId);
    const page = parseInt(String(req.query.page ?? '1'), 10) || 1;
    const limit = parseInt(String(req.query.limit ?? '50'), 10) || 50;

    const { likes, total, pages } = await likeService.getLikesBySubmission(submissionId, page, limit);
    res.json({ likes, pagination: { page, limit, total, pages } });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};