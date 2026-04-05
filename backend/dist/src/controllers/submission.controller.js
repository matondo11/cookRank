import prisma from '../services/prisma.service.js';
import { analyzeFood } from '../services/ai.service.js';
export const submitRecipe = async (req, res) => {
    try {
        const userId = String(req.user?.id ?? '');
        const recipeId = req.body.recipeId ? String(req.body.recipeId) : '';
        const imageUrl = req.body.imageUrl ? String(req.body.imageUrl) : '';
        const caption = req.body.caption ? String(req.body.caption) : null;
        if (!userId || !recipeId || !imageUrl) {
            return res.status(400).json({ error: 'Missing required submission fields' });
        }
        const aiFeedback = await analyzeFood(imageUrl);
        const score = Math.random() * 10;
        const isFraud = Math.random() < 0.1;
        const submissionData = {
            userId,
            recipeId,
            imageUrl,
            caption,
            score,
            feedback: aiFeedback ?? null,
            isFraud,
            status: 'processed',
        };
        const submission = await prisma.recipeSubmission.create({
            data: submissionData,
        });
        const xpGained = 10;
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (user) {
            const newExp = user.experience + xpGained;
            const newLevel = Math.floor(newExp / 100) + 1;
            await prisma.user.update({
                where: { id: userId },
                data: { experience: newExp, level: newLevel },
            });
            if (newLevel > user.level) {
                await prisma.badge.create({
                    data: { userId, name: `Level ${newLevel}`, description: `Reached level ${newLevel}` },
                });
            }
        }
        res.status(201).json(submission);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
export const getSubmissions = async (req, res) => {
    try {
        const submissions = await prisma.recipeSubmission.findMany({
            include: { user: true, recipe: true, comments: true, likes: true },
        });
        res.json(submissions);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
//# sourceMappingURL=submission.controller.js.map