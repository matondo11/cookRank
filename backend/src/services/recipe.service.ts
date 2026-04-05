import prisma from './prisma.service.js';
import type { Prisma } from '../generated/prisma/client.js';

export class RecipeService {
  async createRecipe(
    userId: string,
    title: string,
    description: string | null,
    imageUrl: string | null,
    category: string | null,
    difficulty: string | null,
    ingredients: Array<{ name: string; quantity?: string }>,
    steps: Array<{ content: string }>
  ) {
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
          create: ingredients.map((ing) => ({
            name: ing.name,
            quantity: ing.quantity || null,
          })),
        },
        steps: {
          create: steps.map((step, index) => ({
            order: index + 1,
            content: step.content,
          })),
        },
      },
      include: { ingredients: true, steps: true, user: { select: { id: true, name: true } } },
    });

    return recipe;
  }

  async getRecipes(page: number, limit: number, userId?: string) {
    const where = userId ? { userId } : {};

    const recipes = await prisma.recipe.findMany({
      where,
      include: {
        ingredients: true,
        steps: { orderBy: { order: 'asc' } },
        user: { select: { id: true, name: true, avatar: true } },
        _count: { select: { submissions: true } },
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: 'desc' },
    });

    const total = await prisma.recipe.count({ where });
    return { recipes, total, pages: Math.ceil(total / limit) };
  }

  async getRecipeById(recipeId: string) {
    const recipe = await prisma.recipe.findUnique({
      where: { id: recipeId },
      include: {
        ingredients: true,
        steps: { orderBy: { order: 'asc' } },
        user: { select: { id: true, name: true, avatar: true } },
        submissions: { select: { id: true, score: true, feedback: true } },
      },
    });

    if (!recipe) throw new Error('Recipe not found');
    return recipe;
  }

  async updateRecipe(
    recipeId: string,
    userId: string,
    updates: {
      title?: string;
      description?: string;
      imageUrl?: string;
      category?: string;
      difficulty?: string;
      ingredients?: Array<{ name: string; quantity?: string }>;
      steps?: Array<{ content: string }>;
    }
  ) {
    const recipe = await prisma.recipe.findUnique({
      where: { id: recipeId },
      include: { ingredients: true, steps: true },
    });

    if (!recipe) throw new Error('Recipe not found');
    if (recipe.userId !== userId) throw new Error('Not authorized to update this recipe');

    const updateData: any = {};
    if (updates.title) updateData.title = updates.title;
    if (updates.description) updateData.description = updates.description;
    if (updates.imageUrl) updateData.imageUrl = updates.imageUrl;
    if (updates.category) updateData.category = updates.category;
    if (updates.difficulty) updateData.difficulty = updates.difficulty;

    if (updates.ingredients) {
      await prisma.ingredient.deleteMany({ where: { recipeId } });
      updateData.ingredients = {
        create: updates.ingredients.map((ing) => ({
          name: ing.name,
          quantity: ing.quantity || null,
        })),
      };
    }

    if (updates.steps) {
      await prisma.step.deleteMany({ where: { recipeId } });
      updateData.steps = {
        create: updates.steps.map((step, index) => ({
          order: index + 1,
          content: step.content,
        })),
      };
    }

    const updatedRecipe = await prisma.recipe.update({
      where: { id: recipeId },
      data: updateData,
      include: { ingredients: true, steps: true, user: true },
    });

    return updatedRecipe;
  }

  async deleteRecipe(recipeId: string, userId: string) {
    const recipe = await prisma.recipe.findUnique({ where: { id: recipeId } });

    if (!recipe) throw new Error('Recipe not found');
    if (recipe.userId !== userId) throw new Error('Not authorized to delete this recipe');

    await prisma.recipe.delete({ where: { id: recipeId } });
    return { message: 'Recipe deleted successfully' };
  }
}

export const recipeService = new RecipeService();
