import type { Request, Response } from 'express';
import prisma from '../services/prisma.service.js';
import { body, validationResult } from 'express-validator';

export const createComment = [
  body('content').notEmpty().withMessage('Comment content is required').isLength({ max: 1000 }).withMessage('Comment must be less than 1000 characters'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const userId = String(req.user?.id ?? '');
      const submissionId = String(req.params.submissionId);
      const { content } = req.body;

      // Verify submission exists
      const submission = await prisma.recipeSubmission.findUnique({ where: { id: submissionId } });
      if (!submission) return res.status(404).json({ error: 'Submission not found' });

      const comment = await prisma.comment.create({
        data: {
          content,
          userId,
          submissionId,
        },
        include: {
          user: { select: { id: true, name: true, avatar: true } }
        }
      });

      // Update comment count
      await prisma.recipeSubmission.update({
        where: { id: submissionId },
        data: { commentsCount: { increment: 1 } }
      });

      res.status(201).json(comment);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
];

export const getCommentsBySubmission = async (req: Request, res: Response) => {
  try {
    const submissionId = String(req.params.submissionId);
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 20;

    const comments = await prisma.comment.findMany({
      where: { submissionId },
      include: {
        user: { select: { id: true, name: true, avatar: true } }
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: 'asc' }
    });

    const total = await prisma.comment.count({ where: { submissionId } });

    res.json({
      comments,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateComment = [
  body('content').notEmpty().withMessage('Comment content is required').isLength({ max: 1000 }).withMessage('Comment must be less than 1000 characters'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { commentId } = req.params;
      const userId = String(req.user?.id ?? '');
      const commentIdStr = String(commentId);
      const { content } = req.body;

      const comment = await prisma.comment.findUnique({ where: { id: commentIdStr } });
      if (!comment) return res.status(404).json({ error: 'Comment not found' });
      if (comment.userId !== userId) return res.status(403).json({ error: 'Not authorized to update this comment' });

      const updatedComment = await prisma.comment.update({
        where: { id: commentIdStr },
        data: { content },
        include: {
          user: { select: { id: true, name: true, avatar: true } }
        }
      });

      res.json(updatedComment);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
];

export const deleteComment = async (req: Request, res: Response) => {
  try {
    const { commentId } = req.params;
    const userId = String(req.user?.id ?? '');
    const commentIdStr = String(commentId);

    const comment = await prisma.comment.findUnique({
      where: { id: commentIdStr },
      include: { submission: true }
    });

    if (!comment) return res.status(404).json({ error: 'Comment not found' });
    if (comment.userId !== userId) return res.status(403).json({ error: 'Not authorized to delete this comment' });

    await prisma.comment.delete({ where: { id: commentIdStr } });

    // Update comment count
    await prisma.recipeSubmission.update({
      where: { id: comment.submissionId },
      data: { commentsCount: { decrement: 1 } }
    });

    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};