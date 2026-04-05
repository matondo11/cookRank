import type { Request, Response } from 'express';
export declare const likeSubmission: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const unlikeSubmission: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getLikesBySubmission: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=like.controller.d.ts.map