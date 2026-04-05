import type { Request, Response } from 'express';
export declare const register: (import("express-validator").ValidationChain | ((req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>))[];
export declare const login: (import("express-validator").ValidationChain | ((req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>))[];
export declare const refresh: ((req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>)[];
export declare const logout: ((req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>)[];
//# sourceMappingURL=auth.controller.d.ts.map