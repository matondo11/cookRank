import type { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { recipeService } from '../services/recipe.service.js';
import { externalRecipeService } from '../services/external-recipe.service.js';

export const createRecipe = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').optional().isLength({ min: 1 }).withMessage('Description cannot be empty'),
  body('imageUrl').optional().isURL().withMessage('Valid image URL is required'),
  body('category').optional().notEmpty().withMessage('Category cannot be empty'),
  body('difficulty').optional().isIn(['easy', 'medium', 'hard']).withMessage('Difficulty must be easy, medium, or hard'),
  body('ingredients').isArray({ min: 1 }).withMessage('At least one ingredient is required'),
  body('ingredients.*.name').notEmpty().withMessage('Ingredient name is required'),
  body('steps').isArray({ min: 1 }).withMessage('At least one step is required'),
  body('steps.*.content').notEmpty().withMessage('Step content is required'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const userId = String(req.user?.id ?? '');
      const { title, description, imageUrl, category, difficulty, ingredients, steps } = req.body;

      const recipe = await recipeService.createRecipe(
        userId,
        title,
        description,
        imageUrl,
        category,
        difficulty,
        ingredients,
        steps
      );

      res.status(201).json(recipe);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to create recipe';
      res.status(400).json({ error: message });
    }
  }
];

export const getRecipes = async (req: Request, res: Response) => {
  try {
    const page = parseInt(String(req.query.page ?? '1'), 10) || 1;
    const limit = parseInt(String(req.query.limit ?? '10'), 10) || 10;
    const userId = req.query.userId ? String(req.query.userId) : undefined;

    const { recipes, total, pages } = await recipeService.getRecipes(page, limit, userId);

    res.json({
      recipes,
      pagination: { page, limit, total, pages }
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const searchRecipes = async (req: Request, res: Response) => {
  try {
    const query = req.query.q ? String(req.query.q) : '';

    if (!query) {
      return res.status(400).json({ error: 'Search query is required' });
    }

    const recipes = await externalRecipeService.searchRecipes(query);
    res.json({ recipes });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Search failed';
    res.status(500).json({ error: message });
  }
};

export const getRecipeById = async (req: Request, res: Response) => {
  try {
    const recipeId = String(req.params.recipeId);
    const recipe = await recipeService.getRecipeById(recipeId);
    res.json(recipe);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Internal server error';
    res.status(error instanceof Error && error.message.includes('not found') ? 404 : 500).json({ error: message });
  }
};

export const updateRecipe = [
  body('title').optional().notEmpty().withMessage('Title cannot be empty'),
  body('description').optional().notEmpty().withMessage('Description cannot be empty'),
  body('imageUrl').optional().isURL().withMessage('Valid image URL is required'),
  body('category').optional().notEmpty().withMessage('Category cannot be empty'),
  body('difficulty').optional().isIn(['easy', 'medium', 'hard']).withMessage('Difficulty must be easy, medium, or hard'),
  body('ingredients').optional().isArray().withMessage('Ingredients must be an array'),
  body('steps').optional().isArray().withMessage('Steps must be an array'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const recipeId = String(req.params.recipeId);
      const userId = String(req.user?.id ?? '');
      const { title, description, imageUrl, category, difficulty, ingredients, steps } = req.body;

      const updatedRecipe = await recipeService.updateRecipe(recipeId, userId, {
        title,
        description,
        imageUrl,
        category,
        difficulty,
        ingredients,
        steps,
      });

      res.json(updatedRecipe);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to update recipe';
      res.status(error instanceof Error && message.includes('not authorized') ? 403 : 400).json({ error: message });
    }
  }
];

export const deleteRecipe = async (req: Request, res: Response) => {
  try {
    const recipeId = String(req.params.recipeId);
    const userId = String(req.user?.id ?? '');

    const result = await recipeService.deleteRecipe(recipeId, userId);
    res.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to delete recipe';
    res.status(error instanceof Error && message.includes('not authorized') ? 403 : 400).json({ error: message });
  }
};