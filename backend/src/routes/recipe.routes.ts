import { Router } from 'express';
import { createRecipe, getRecipes } from '../controllers/recipe.controller.js';
import { authenticateToken } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/', authenticateToken, createRecipe);
router.get('/', getRecipes);

export default router;