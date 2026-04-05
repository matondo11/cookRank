import type { Request, Response } from 'express';
export declare const submitRecipe: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getSubmissionById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateSubmission: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteSubmission: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=submission.controller.d.ts.map