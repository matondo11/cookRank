import type { Request, Response } from 'express';
export declare const createRecipe: (import("express-validator").ValidationChain | ((req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>))[];
export declare const getRecipes: (req: Request, res: Response) => Promise<void>;
export declare const searchRecipes: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getRecipeById: (req: Request, res: Response) => Promise<void>;
export declare const updateRecipe: (import("express-validator").ValidationChain | ((req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>))[];
export declare const deleteRecipe: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=recipe.controller.d.ts.map