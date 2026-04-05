import prisma from './prisma.service.js';
import { analyzeFood } from './ai.service.js';
export class SubmissionService {
    async submitRecipe(userId, recipeId, imageUrl, caption) {
        // Verify recipe exists
        const recipe = await prisma.recipe.findUnique({ where: { id: recipeId } });
        if (!recipe)
            throw new Error('Recipe not found');
        // Call AI service
        const aiFeedback = await analyzeFood(imageUrl);
        const score = Math.random() * 10;
        const isFraud = Math.random() < 0.1;
        // Create submission
        const submission = await prisma.recipeSubmission.create({
            data: {
                userId,
                recipeId,
                imageUrl,
                caption: caption || null,
                score,
                feedback: aiFeedback || null,
                isFraud,
                status: 'processed',
            },
            include: { user: { select: { id: true, name: true, avatar: true } }, recipe: true },
        });
        // Award XP to user
        await this.awardExperiencePoints(userId, 10);
        return submission;
    }
    async getSubmissions(page, limit, userId, recipeId) {
        const where = {};
        if (userId)
            where.userId = userId;
        if (recipeId)
            where.recipeId = recipeId;
        const submissions = await prisma.recipeSubmission.findMany({
            where,
            include: {
                user: { select: { id: true, name: true, avatar: true } },
                recipe: { select: { id: true, title: true, imageUrl: true } },
                _count: { select: { comments: true, likes: true } },
            },
            orderBy: { createdAt: 'desc' },
            skip: (page - 1) * limit,
            take: limit,
        });
        const total = await prisma.recipeSubmission.count({ where });
        return { submissions, total, pages: Math.ceil(total / limit) };
    }
    async getSubmissionById(submissionId) {
        const submission = await prisma.recipeSubmission.findUnique({
            where: { id: submissionId },
            include: {
                user: { select: { id: true, name: true, avatar: true } },
                recipe: true,
                comments: {
                    include: { user: { select: { id: true, name: true, avatar: true } } },
                    orderBy: { createdAt: 'asc' },
                },
                likes: { include: { user: { select: { id: true, name: true } } } },
                _count: { select: { comments: true, likes: true } },
            },
        });
        if (!submission)
            throw new Error('Submission not found');
        return submission;
    }
    async updateSubmission(submissionId, userId, updates) {
        const submission = await prisma.recipeSubmission.findUnique({
            where: { id: submissionId },
        });
        if (!submission)
            throw new Error('Submission not found');
        if (submission.userId !== userId)
            throw new Error('Not authorized to update this submission');
        const updateData = {};
        if (updates.caption !== undefined)
            updateData.caption = updates.caption;
        if (updates.visibility)
            updateData.visibility = updates.visibility;
        const updatedSubmission = await prisma.recipeSubmission.update({
            where: { id: submissionId },
            data: updateData,
            include: { user: true, recipe: true },
        });
        return updatedSubmission;
    }
    async deleteSubmission(submissionId, userId) {
        const submission = await prisma.recipeSubmission.findUnique({
            where: { id: submissionId },
        });
        if (!submission)
            throw new Error('Submission not found');
        if (submission.userId !== userId)
            throw new Error('Not authorized to delete this submission');
        await prisma.recipeSubmission.delete({ where: { id: submissionId } });
        return { message: 'Submission deleted successfully' };
    }
    async awardExperiencePoints(userId, xpAmount) {
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user)
            return;
        const newExp = user.experience + xpAmount;
        const newLevel = Math.floor(newExp / 100) + 1;
        await prisma.user.update({
            where: { id: userId },
            data: { experience: newExp, level: newLevel },
        });
        // Award badge on level up
        if (newLevel > user.level) {
            await prisma.badge.create({
                data: {
                    userId,
                    name: `Level ${newLevel}`,
                    description: `Reached level ${newLevel}`,
                },
            });
        }
    }
}
export const submissionService = new SubmissionService();
//# sourceMappingURL=submission.service.js.map