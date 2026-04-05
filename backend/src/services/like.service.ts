import prisma from './prisma.service.js';

export class LikeService {
  async likeSubmission(userId: string, submissionId: string) {
    // Verify submission exists
    const submission = await prisma.recipeSubmission.findUnique({ where: { id: submissionId } });
    if (!submission) throw new Error('Submission not found');

    // Check if already liked
    const existingLike = await prisma.like.findUnique({
      where: { userId_submissionId: { userId, submissionId } },
    });

    if (existingLike) {
      throw new Error('Already liked this submission');
    }

    const like = await prisma.like.create({
      data: {
        userId,
        submissionId,
      },
      include: {
        user: { select: { id: true, name: true } },
      },
    });

    // Update like count
    await prisma.recipeSubmission.update({
      where: { id: submissionId },
      data: { likesCount: { increment: 1 } },
    });

    return like;
  }

  async unlikeSubmission(userId: string, submissionId: string) {
    const deletedLike = await prisma.like.deleteMany({
      where: { userId, submissionId },
    });

    if (deletedLike.count === 0) {
      throw new Error('Like not found');
    }

    // Update like count
    await prisma.recipeSubmission.update({
      where: { id: submissionId },
      data: { likesCount: { decrement: 1 } },
    });

    return { message: 'Unliked successfully' };
  }

  async getLikesBySubmission(submissionId: string, page: number, limit: number) {
    const likes = await prisma.like.findMany({
      where: { submissionId },
      include: {
        user: { select: { id: true, name: true, avatar: true } },
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    const total = await prisma.like.count({ where: { submissionId } });
    return { likes, total, pages: Math.ceil(total / limit) };
  }
}

export const likeService = new LikeService();
