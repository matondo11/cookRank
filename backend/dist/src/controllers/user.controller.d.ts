import type { Request, Response } from 'express';
export declare const getProfile: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getUserById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getUsers: (req: Request, res: Response) => Promise<void>;
export declare const updateProfile: (import("express-validator").ValidationChain | ((req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>))[];
export declare const deleteAccount: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const followUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const unfollowUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=user.controller.d.ts.map