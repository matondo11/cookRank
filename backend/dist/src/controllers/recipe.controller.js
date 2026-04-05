import prisma from '../services/prisma.service.js';
import { body, validationResult } from 'express-validator';
export const createRecipe = [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('imageUrl').isURL().withMessage('Valid image URL is required'),
    body('category').notEmpty().withMessage('Category is required'),
    body('difficulty').isIn(['easy', 'medium', 'hard']).withMessage('Difficulty must be easy, medium, or hard'),
    body('ingredients').isArray({ min: 1 }).withMessage('At least one ingredient is required'),
    body('ingredients.*.name').notEmpty().withMessage('Ingredient name is required'),
    body('ingredients.*.quantity').notEmpty().withMessage('Ingredient quantity is required'),
    body('steps').isArray({ min: 1 }).withMessage('At least one step is required'),
    body('steps.*.content').notEmpty().withMessage('Step content is required'),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const userId = String(req.user?.id ?? '');
            const { title, description, imageUrl, category, difficulty, ingredients, steps } = req.body;
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
                            name: String(ing.name),
                            quantity: String(ing.quantity)
                        })),
                    },
                    steps: {
                        create: steps.map((step, index) => ({
                            order: index + 1,
                            content: String(step.content)
                        })),
                    },
                },
                include: { ingredients: true, steps: true, user: true }
            });
            res.status(201).json(recipe);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
];
export const getRecipes = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const category = req.query.category;
        const difficulty = req.query.difficulty;
        const search = req.query.search;
        const userId = req.query.userId;
        const where = {};
        if (category)
            where.category = category;
        if (difficulty)
            where.difficulty = difficulty;
        if (userId)
            where.userId = userId;
        if (search) {
            where.OR = [
                { title: { contains: search, mode: 'insensitive' } },
                { description: { contains: search, mode: 'insensitive' } },
                { category: { contains: search, mode: 'insensitive' } }
            ];
        }
        const recipes = await prisma.recipe.findMany({
            where,
            include: {
                ingredients: true,
                steps: true,
                user: { select: { id: true, name: true, avatar: true } },
                _count: { select: { submissions: true } }
            },
            skip: (page - 1) * limit,
            take: limit,
            orderBy: { createdAt: 'desc' }
        });
        const total = await prisma.recipe.count({ where });
        res.json({
            recipes,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit)
            }
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
export const getRecipeById = async (req, res) => {
    try {
        const { recipeId } = req.params;
        const recipe = await prisma.recipe.findUnique({
            where: { id: recipeId },
            include: {
                ingredients: true,
                steps: { orderBy: { order: 'asc' } },
                user: { select: { id: true, name: true, avatar: true } },
                _count: { select: { submissions: true } }
            },
        });
        if (!recipe)
            return res.status(404).json({ error: 'Recipe not found' });
        res.json(recipe);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
export const updateRecipe = [
    body('title').optional().notEmpty().withMessage('Title cannot be empty'),
    body('description').optional().notEmpty().withMessage('Description cannot be empty'),
    body('imageUrl').optional().isURL().withMessage('Valid image URL is required'),
    body('category').optional().notEmpty().withMessage('Category cannot be empty'),
    body('difficulty').optional().isIn(['easy', 'medium', 'hard']).withMessage('Difficulty must be easy, medium, or hard'),
    body('ingredients').optional().isArray().withMessage('Ingredients must be an array'),
    body('ingredients.*.name').optional().notEmpty().withMessage('Ingredient name cannot be empty'),
    body('ingredients.*.quantity').optional().notEmpty().withMessage('Ingredient quantity cannot be empty'),
    body('steps').optional().isArray().withMessage('Steps must be an array'),
    body('steps.*.content').optional().notEmpty().withMessage('Step content cannot be empty'),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const { recipeId } = req.params;
            const userId = String(req.user?.id ?? '');
            const updates = req.body;
            const recipe = await prisma.recipe.findUnique({
                where: { id: recipeId },
                include: { ingredients: true, steps: true }
            });
            if (!recipe)
                return res.status(404).json({ error: 'Recipe not found' });
            if (recipe.userId !== userId)
                return res.status(403).json({ error: 'Not authorized to update this recipe' });
            // Update recipe
            const updateData = {};
            if (updates.title)
                updateData.title = updates.title;
            if (updates.description)
                updateData.description = updates.description;
            if (updates.imageUrl)
                updateData.imageUrl = updates.imageUrl;
            if (updates.category)
                updateData.category = updates.category;
            if (updates.difficulty)
                updateData.difficulty = updates.difficulty;
            // Handle ingredients update
            if (updates.ingredients) {
                await prisma.ingredient.deleteMany({ where: { recipeId } });
                updateData.ingredients = {
                    create: updates.ingredients.map((ing) => ({
                        name: String(ing.name),
                        quantity: String(ing.quantity)
                    }))
                };
            }
            // Handle steps update
            if (updates.steps) {
                await prisma.step.deleteMany({ where: { recipeId } });
                updateData.steps = {
                    create: updates.steps.map((step, index) => ({
                        order: index + 1,
                        content: String(step.content)
                    }))
                };
            }
            const updatedRecipe = await prisma.recipe.update({
                where: { id: recipeId },
                data: updateData,
                include: { ingredients: true, steps: true, user: true }
            });
            res.json(updatedRecipe);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
];
export const deleteRecipe = async (req, res) => {
    try {
        const { recipeId } = req.params;
        const userId = String(req.user?.id ?? '');
        const recipe = await prisma.recipe.findUnique({ where: { id: recipeId } });
        if (!recipe)
            return res.status(404).json({ error: 'Recipe not found' });
        if (recipe.userId !== userId)
            return res.status(403).json({ error: 'Not authorized to delete this recipe' });
        await prisma.recipe.delete({ where: { id: recipeId } });
        res.json({ message: 'Recipe deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
//# sourceMappingURL=recipe.controller.js.map