import type { Request, Response } from 'express';
import type { Prisma } from '../generated/prisma/client.js';
import prisma from '../services/prisma.service.js';
import { analyzeFood } from '../services/ai.service.js';

export const submitRecipe = async (req: Request, res: Response) => {
  try {
    const userId = String(req.user?.id ?? '');
    const recipeId = req.body.recipeId ? String(req.body.recipeId) : '';
    const imageUrl = req.body.imageUrl ? String(req.body.imageUrl) : '';
    const caption = req.body.caption ? String(req.body.caption) : null;

    if (!userId || !recipeId || !imageUrl) {
      return res.status(400).json({ error: 'Missing required submission fields' });
    }

    const aiFeedback = await analyzeFood(imageUrl);
    const score = Math.random() * 10;
    const isFraud = Math.random() < 0.1;

    const submissionData: Prisma.RecipeSubmissionUncheckedCreateInput = {
      userId,
      recipeId,
      imageUrl,
      caption,
      score,
      feedback: aiFeedback ?? null,
      isFraud,
      status: 'processed',
    };

    const submission = await prisma.recipeSubmission.create({
      data: submissionData,
    });

    const xpGained = 10;
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (user) {
      const newExp = user.experience + xpGained;
      const newLevel = Math.floor(newExp / 100) + 1;
      await prisma.user.update({
        where: { id: userId },
        data: { experience: newExp, level: newLevel },
      });

      if (newLevel > user.level) {
        await prisma.badge.create({
          data: { userId, name: `Level ${newLevel}`, description: `Reached level ${newLevel}` },
        });
      }
    }

    res.status(201).json(submission);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getSubmissionById = async (req: Request, res: Response) => {
  try {
    const { submissionId } = req.params;
    const submission = await prisma.recipeSubmission.findUnique({
      where: { id: submissionId },
      include: {
        user: { select: { id: true, name: true, avatar: true } },
        recipe: true,
        comments: {
          include: { user: { select: { id: true, name: true, avatar: true } } },
          orderBy: { createdAt: 'asc' }
        },
        likes: { include: { user: { select: { id: true, name: true } } } },
        _count: { select: { comments: true, likes: true } }
      },
    });
    if (!submission) return res.status(404).json({ error: 'Submission not found' });
    res.json(submission);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateSubmission = async (req: Request, res: Response) => {
  try {
    const { submissionId } = req.params;
    const userId = String(req.user?.id ?? '');
    const { caption, visibility } = req.body;

    const submission = await prisma.recipeSubmission.findUnique({
      where: { id: submissionId }
    });

    if (!submission) return res.status(404).json({ error: 'Submission not found' });
    if (submission.userId !== userId) return res.status(403).json({ error: 'Not authorized to update this submission' });

    const updateData: any = {};
    if (caption !== undefined) updateData.caption = caption;
    if (visibility) updateData.visibility = visibility;

    const updatedSubmission = await prisma.recipeSubmission.update({
      where: { id: submissionId },
      data: updateData,
      include: { user: true, recipe: true }
    });

    res.json(updatedSubmission);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteSubmission = async (req: Request, res: Response) => {
  try {
    const { submissionId } = req.params;
    const userId = String(req.user?.id ?? '');

    const submission = await prisma.recipeSubmission.findUnique({
      where: { id: submissionId }
    });

    if (!submission) return res.status(404).json({ error: 'Submission not found' });
    if (submission.userId !== userId) return res.status(403).json({ error: 'Not authorized to delete this submission' });

    await prisma.recipeSubmission.delete({ where: { id: submissionId } });
    res.json({ message: 'Submission deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};