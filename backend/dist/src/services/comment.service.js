import prisma from './prisma.service.js';
export class CommentService {
    async createComment(userId, submissionId, content) {
        // Verify submission exists
        const submission = await prisma.recipeSubmission.findUnique({ where: { id: submissionId } });
        if (!submission)
            throw new Error('Submission not found');
        const comment = await prisma.comment.create({
            data: {
                content,
                userId,
                submissionId,
            },
            include: {
                user: { select: { id: true, name: true, avatar: true } },
            },
        });
        // Update comment count
        await prisma.recipeSubmission.update({
            where: { id: submissionId },
            data: { commentsCount: { increment: 1 } },
        });
        return comment;
    }
    async getCommentsBySubmission(submissionId, page, limit) {
        const comments = await prisma.comment.findMany({
            where: { submissionId },
            include: {
                user: { select: { id: true, name: true, avatar: true } },
            },
            skip: (page - 1) * limit,
            take: limit,
            orderBy: { createdAt: 'asc' },
        });
        const total = await prisma.comment.count({ where: { submissionId } });
        return { comments, total, pages: Math.ceil(total / limit) };
    }
    async updateComment(commentId, userId, content) {
        const comment = await prisma.comment.findUnique({ where: { id: commentId } });
        if (!comment)
            throw new Error('Comment not found');
        if (comment.userId !== userId)
            throw new Error('Not authorized to update this comment');
        const updatedComment = await prisma.comment.update({
            where: { id: commentId },
            data: { content },
            include: {
                user: { select: { id: true, name: true, avatar: true } },
            },
        });
        return updatedComment;
    }
    async deleteComment(commentId, userId) {
        const comment = await prisma.comment.findUnique({
            where: { id: commentId },
            include: { submission: true },
        });
        if (!comment)
            throw new Error('Comment not found');
        if (comment.userId !== userId)
            throw new Error('Not authorized to delete this comment');
        await prisma.comment.delete({ where: { id: commentId } });
        // Update comment count
        await prisma.recipeSubmission.update({
            where: { id: comment.submissionId },
            data: { commentsCount: { decrement: 1 } },
        });
        return { message: 'Comment deleted successfully' };
    }
}
export const commentService = new CommentService();
//# sourceMappingURL=comment.service.js.map