export declare class ExternalRecipeService {
    private readonly SPOONACULAR_API_KEY;
    private readonly SPOONACULAR_BASE_URL;
    searchRecipes(query: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string | null;
        title: string;
        description: string | null;
        imageUrl: string | null;
        category: string | null;
        difficulty: string | null;
        source: import("../generated/prisma/enums.ts").RecipeSource;
        externalId: string | null;
        cachedAt: Date | null;
    }[]>;
    getRecipeDetails(recipeId: string): Promise<{
        ingredients: {
            id: string;
            name: string;
            quantity: string | null;
            recipeId: string;
        }[];
        steps: {
            id: string;
            content: string;
            recipeId: string;
            order: number;
        }[];
    } & {
        id: string;
        createdAt: Date;
        userId: string | null;
        title: string;
        description: string | null;
        imageUrl: string | null;
        category: string | null;
        difficulty: string | null;
        source: import("../generated/prisma/enums.ts").RecipeSource;
        externalId: string | null;
        cachedAt: Date | null;
    }>;
    private searchSpoonacular;
    private fetchAndSaveRecipe;
}
export declare const externalRecipeService: ExternalRecipeService;
//# sourceMappingURL=external-recipe.service.d.ts.map