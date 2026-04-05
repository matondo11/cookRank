import express, { type Application } from 'express';
import cors from 'cors';
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import recipeRouter from './routes/recipe.routes.js';
import submissionRouter from './routes/submission.routes.js';
import aiRouter from './routes/ai.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';
import { notFoundHandler } from './middlewares/not-found.middleware.js';

const app: Application = express();

app.set('trust proxy', true);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/recipes', recipeRouter);
app.use('/api/submissions', submissionRouter);
app.use('/api/ai', aiRouter);

app.use(notFoundHandler);
app.use(errorHandler);

export default app; 