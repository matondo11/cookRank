import type { Request, Response } from 'express';
import prisma from '../services/prisma.service.js';

export const createRecipe = async (req: Request, res: Response) => {
  try {
    const userId = String(req.user?.id ?? '');
    const title = String(req.body.title ?? '');
    const description = String(req.body.description ?? '');
    const imageUrl = String(req.body.imageUrl ?? '');
    const category = String(req.body.category ?? '');
    const difficulty = String(req.body.difficulty ?? '');
    const ingredients = Array.isArray(req.body.ingredients) ? req.body.ingredients : [];
    const steps = Array.isArray(req.body.steps) ? req.body.steps : [];

    if (!userId || !title || !description || !imageUrl || !category || !difficulty) {
      return res.status(400).json({ error: 'Missing required recipe fields' });
    }

    if (!ingredients.length || !steps.length) {
      return res.status(400).json({ error: 'Recipe must include ingredients and steps' });
    }

    const recipe = await prisma.recipe.create({
      data: {
        title,
        description,
        imageUrl,
        category,
        difficulty,
        source: 'user',
        userId,
        ingredients: {
          create: ingredients
            .filter((ing: any) => ing?.name && ing?.quantity)
            .map((ing: any) => ({ name: String(ing.name), quantity: String(ing.quantity) })),
        },
        steps: {
          create: steps
            .filter((step: any) => step?.content)
            .map((step: any, index: number) => ({ order: index + 1, content: String(step.content) })),
        },
      },
    });
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getRecipes = async (req: Request, res: Response) => {
  try {
    const recipes = await prisma.recipe.findMany({
      include: { ingredients: true, steps: true, user: true },
    });
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};