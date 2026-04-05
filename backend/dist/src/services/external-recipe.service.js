import prisma from './prisma.service.js';
export class ExternalRecipeService {
    SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY || 'demo';
    SPOONACULAR_BASE_URL = 'https://api.spoonacular.com/recipes';
    async searchRecipes(query) {
        // Try to find locally first
        const localRecipes = await prisma.recipe.findMany({
            where: {
                title: { contains: query, mode: 'insensitive' },
            },
            take: 10,
        });
        if (localRecipes.length > 0) {
            return localRecipes;
        }
        // If not found locally, search external API
        return await this.searchSpoonacular(query);
    }
    async getRecipeDetails(recipeId) {
        // Try to find locally first
        const localRecipe = await prisma.recipe.findUnique({
            where: { id: recipeId },
            include: { ingredients: true, steps: true },
        });
        if (localRecipe) {
            return localRecipe;
        }
        // If not found, assume it's an external ID and fetch from API
        const externalId = parseInt(recipeId, 10);
        if (!isNaN(externalId)) {
            const recipe = await this.fetchAndSaveRecipe(externalId);
            return recipe;
        }
        throw new Error('Recipe not found');
    }
    async searchSpoonacular(query) {
        try {
            const response = await fetch(`${this.SPOONACULAR_BASE_URL}/complexSearch?query=${encodeURIComponent(query)}&apiKey=${this.SPOONACULAR_API_KEY}&number=10`);
            if (!response.ok) {
                console.error('Spoonacular API error:', response.statusText);
                return [];
            }
            const data = await response.json();
            const results = data.results || [];
            // Save found recipes to database
            const savedRecipes = await Promise.all(results.slice(0, 5).map((recipe) => this.fetchAndSaveRecipe(recipe.id)));
            return savedRecipes;
        }
        catch (error) {
            console.error('Error searching Spoonacular:', error);
            return [];
        }
    }
    async fetchAndSaveRecipe(externalId) {
        try {
            // Check if already saved
            const existing = await prisma.recipe.findFirst({
                where: { externalId: String(externalId) },
                include: { ingredients: true, steps: true },
            });
            if (existing)
                return existing;
            // Fetch from API
            const response = await fetch(`${this.SPOONACULAR_BASE_URL}/${externalId}/information?apiKey=${this.SPOONACULAR_API_KEY}&includeNutrition=false`);
            if (!response.ok) {
                throw new Error(`Failed to fetch recipe ${externalId}`);
            }
            const recipeData = await response.json();
            // Save to database
            const recipe = await prisma.recipe.create({
                data: {
                    title: recipeData.title,
                    description: recipeData.summary || '',
                    imageUrl: recipeData.image,
                    source: 'external',
                    externalId: String(externalId),
                    cachedAt: new Date(),
                    ingredients: {
                        create: recipeData.extendedIngredients.map((ingredient) => ({
                            name: ingredient.name,
                            quantity: ingredient.original,
                        })),
                    },
                    steps: {
                        create: recipeData.analyzedInstructions[0]?.steps.map((step, index) => ({
                            order: step.number || index + 1,
                            content: step.step,
                        })) || [{ order: 1, content: 'No instructions provided' }],
                    },
                },
                include: { ingredients: true, steps: true },
            });
            return recipe;
        }
        catch (error) {
            console.error('Error fetching and saving recipe:', error);
            throw error;
        }
    }
}
export const externalRecipeService = new ExternalRecipeService();
//# sourceMappingURL=external-recipe.service.js.map