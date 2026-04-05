export declare class CommentService {
    createComment(userId: string, submissionId: string, content: string): Promise<{
        user: {
            id: string;
            name: string;
            avatar: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        userId: string;
        content: string;
        submissionId: string;
    }>;
    getCommentsBySubmission(submissionId: string, page: number, limit: number): Promise<{
        comments: ({
            user: {
                id: string;
                name: string;
                avatar: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            userId: string;
            content: string;
            submissionId: string;
        })[];
        total: number;
        pages: number;
    }>;
    updateComment(commentId: string, userId: string, content: string): Promise<{
        user: {
            id: string;
            name: string;
            avatar: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        userId: string;
        content: string;
        submissionId: string;
    }>;
    deleteComment(commentId: string, userId: string): Promise<{
        message: string;
    }>;
}
export declare const commentService: CommentService;
//# sourceMappingURL=comment.service.d.ts.map