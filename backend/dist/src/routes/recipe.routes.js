import { Router } from 'express';
import { createRecipe, getRecipes, getRecipeById, updateRecipe, deleteRecipe, searchRecipes } from '../controllers/recipe.controller.js';
import { authenticateToken } from '../middlewares/auth.middleware.js';
const router = Router();
// Public routes
router.get('/search', searchRecipes);
router.get('/', getRecipes);
router.get('/:recipeId', getRecipeById);
// Protected routes
router.post('/', authenticateToken, createRecipe);
router.put('/:recipeId', authenticateToken, updateRecipe);
router.delete('/:recipeId', authenticateToken, deleteRecipe);
export default router;
//# sourceMappingURL=recipe.routes.js.map