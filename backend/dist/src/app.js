import express, {} from 'express';
import cors from 'cors';
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import recipeRouter from './routes/recipe.routes.js';
import submissionRouter from './routes/submission.routes.js';
import commentRouter from './routes/comment.routes.ts';
import likeRouter from './routes/like.routes.ts';
import aiRouter from './routes/ai.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';
import { notFoundHandler } from './middlewares/not-found.middleware.js';
import { securityMiddleware, compressionMiddleware, loggingMiddleware, corsOptions, sanitizeMiddleware, generalLimiter, authLimiter } from './middlewares/security.middleware.js';
const app = express();
// Security middleware
app.use(securityMiddleware);
app.use(compressionMiddleware);
app.use(loggingMiddleware);
// CORS
app.use(cors(corsOptions));
// Body parsing
app.set('trust proxy', 1);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
// Input sanitization
app.use(sanitizeMiddleware);
// Rate limiting
app.use('/api/auth', authLimiter);
app.use('/api', generalLimiter);
// Health check
app.get('/health', (_req, res) => res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
}));
// API routes
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/recipes', recipeRouter);
app.use('/api/submissions', submissionRouter);
app.use('/api/submissions', commentRouter);
app.use('/api/submissions', likeRouter);
app.use('/api/ai', aiRouter);
// Error handling
app.use(notFoundHandler);
app.use(errorHandler);
export default app;
//# sourceMappingURL=app.js.map