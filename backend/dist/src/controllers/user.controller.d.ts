import type { Request, Response } from 'express';
export declare const getProfile: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const followUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const unfollowUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=user.controller.d.ts.map