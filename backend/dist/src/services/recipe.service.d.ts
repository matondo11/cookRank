export declare class RecipeService {
    createRecipe(userId: string, title: string, description: string | null, imageUrl: string | null, category: string | null, difficulty: string | null, ingredients: Array<{
        name: string;
        quantity?: string;
    }>, steps: Array<{
        content: string;
    }>): Promise<{
        user: {
            id: string;
            name: string;
        } | null;
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
    getRecipes(page: number, limit: number, userId?: string): Promise<{
        recipes: ({
            user: {
                id: string;
                name: string;
                avatar: string | null;
            } | null;
            _count: {
                submissions: number;
            };
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
        })[];
        total: number;
        pages: number;
    }>;
    getRecipeById(recipeId: string): Promise<{
        submissions: {
            id: string;
            score: number | null;
            feedback: string | null;
        }[];
        user: {
            id: string;
            name: string;
            avatar: string | null;
        } | null;
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
    updateRecipe(recipeId: string, userId: string, updates: {
        title?: string;
        description?: string;
        imageUrl?: string;
        category?: string;
        difficulty?: string;
        ingredients?: Array<{
            name: string;
            quantity?: string;
        }>;
        steps?: Array<{
            content: string;
        }>;
    }): Promise<{
        user: {
            id: string;
            name: string;
            email: string;
            password: string;
            avatar: string | null;
            createdAt: Date;
            followersCount: number;
            followingCount: number;
            level: number;
            experience: number;
        } | null;
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
    deleteRecipe(recipeId: string, userId: string): Promise<{
        message: string;
    }>;
}
export declare const recipeService: RecipeService;
//# sourceMappingURL=recipe.service.d.ts.map