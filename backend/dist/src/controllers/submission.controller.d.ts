import type { Request, Response } from 'express';
export declare const submitRecipe: (import("express-validator").ValidationChain | ((req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>))[];
export declare const getSubmissions: (req: Request, res: Response) => Promise<void>;
export declare const getSubmissionById: (req: Request, res: Response) => Promise<void>;
export declare const updateSubmission: (import("express-validator").ValidationChain | ((req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>))[];
export declare const deleteSubmission: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=submission.controller.d.ts.map