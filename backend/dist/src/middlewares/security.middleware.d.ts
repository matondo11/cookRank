import type { Request, Response, NextFunction } from 'express';
export declare const authLimiter: import("express-rate-limit").RateLimitRequestHandler;
export declare const generalLimiter: import("express-rate-limit").RateLimitRequestHandler;
export declare const apiLimiter: import("express-rate-limit").RateLimitRequestHandler;
export declare const securityMiddleware: (req: import("node:http").IncomingMessage, res: import("node:http").ServerResponse, next: (err?: unknown) => void) => void;
export declare const compressionMiddleware: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const loggingMiddleware: (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, callback: (err?: Error) => void) => void;
export declare const corsOptions: {
    origin: string | boolean;
    credentials: boolean;
    methods: string[];
    allowedHeaders: string[];
};
export declare const sanitizeMiddleware: (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=security.middleware.d.ts.map