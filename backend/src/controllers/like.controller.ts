import type { Request, Response } from 'express';
import prisma from '../services/prisma.service.js';

export const likeSubmission = async (req: Request, res: Response) => {
  try {
    const userId = String(req.user?.id ?? '');
    const submissionId = String(req.params.submissionId);

    // Verify submission exists
    const submission = await prisma.recipeSubmission.findUnique({ where: { id: submissionId } });
    if (!submission) return res.status(404).json({ error: 'Submission not found' });

    // Check if already liked
    const existingLike = await prisma.like.findUnique({
      where: { userId_submissionId: { userId, submissionId } }
    });

    if (existingLike) {
      return res.status(400).json({ error: 'Already liked this submission' });
    }

    const like = await prisma.like.create({
      data: {
        userId,
        submissionId,
      },
      include: {
        user: { select: { id: true, name: true } }
      }
    });

    // Update like count
    await prisma.recipeSubmission.update({
      where: { id: submissionId },
      data: { likesCount: { increment: 1 } }
    });

    res.status(201).json(like);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const unlikeSubmission = async (req: Request, res: Response) => {
  try {
    const userId = String(req.user?.id ?? '');
    const submissionId = String(req.params.submissionId);

    const deletedLike = await prisma.like.deleteMany({
      where: { userId, submissionId }
    });

    if (deletedLike.count === 0) {
      return res.status(400).json({ error: 'Like not found' });
    }

    // Update like count
    await prisma.recipeSubmission.update({
      where: { id: submissionId },
      data: { likesCount: { decrement: 1 } }
    });

    res.json({ message: 'Unliked successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getLikesBySubmission = async (req: Request, res: Response) => {
  try {
    const submissionId = String(req.params.submissionId);
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 50;

    const likes = await prisma.like.findMany({
      where: { submissionId },
      include: {
        user: { select: { id: true, name: true, avatar: true } }
      },
      skip: (page - 1) * limit,
      take: limit
    });

    const total = await prisma.like.count({ where: { submissionId } });

    res.json({
      likes,
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