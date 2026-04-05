import type { Request, Response } from 'express';
export declare const createComment: (import("express-validator").ValidationChain | ((req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>))[];
export declare const getCommentsBySubmission: (req: Request, res: Response) => Promise<void>;
export declare const updateComment: (import("express-validator").ValidationChain | ((req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>))[];
export declare const deleteComment: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=comment.controller.d.ts.map