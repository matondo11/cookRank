export declare class LikeService {
    likeSubmission(userId: string, submissionId: string): Promise<{
        user: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        userId: string;
        submissionId: string;
    }>;
    unlikeSubmission(userId: string, submissionId: string): Promise<{
        message: string;
    }>;
    getLikesBySubmission(submissionId: string, page: number, limit: number): Promise<{
        likes: ({
            user: {
                id: string;
                name: string;
                avatar: string | null;
            };
        } & {
            id: string;
            userId: string;
            submissionId: string;
        })[];
        total: number;
        pages: number;
    }>;
}
export declare const likeService: LikeService;
//# sourceMappingURL=like.service.d.ts.map