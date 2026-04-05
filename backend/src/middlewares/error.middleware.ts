import type { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err?.stack ?? err);
  const status = err?.status ?? 500;
  const message = err?.message ?? 'Something went wrong!';
  res.status(status).json({ error: message });
};