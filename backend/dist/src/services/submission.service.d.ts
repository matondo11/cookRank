export declare class SubmissionService {
    submitRecipe(userId: string, recipeId: string, imageUrl: string, caption?: string): Promise<{
        user: {
            id: string;
            name: string;
            avatar: string | null;
        };
        recipe: {
            id: string;
            createdAt: Date;
            userId: string | null;
            title: string;
            description: string | null;
            imageUrl: string | null;
            category: string | null;
            difficulty: string | null;
            source: import("../generated/prisma/enums.ts").RecipeSource;
            externalId: string | null;
            cachedAt: Date | null;
        };
    } & {
        id: string;
        createdAt: Date;
        userId: string;
        imageUrl: string;
        recipeId: string;
        score: number | null;
        feedback: string | null;
        isFraud: boolean;
        status: import("../generated/prisma/enums.ts").SubmissionStatus;
        caption: string | null;
        visibility: import("../generated/prisma/enums.ts").Visibility;
        likesCount: number;
        commentsCount: number;
    }>;
    getSubmissions(page: number, limit: number, userId?: string, recipeId?: string): Promise<{
        submissions: ({
            user: {
                id: string;
                name: string;
                avatar: string | null;
            };
            _count: {
                comments: number;
                likes: number;
            };
            recipe: {
                id: string;
                title: string;
                imageUrl: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            userId: string;
            imageUrl: string;
            recipeId: string;
            score: number | null;
            feedback: string | null;
            isFraud: boolean;
            status: import("../generated/prisma/enums.ts").SubmissionStatus;
            caption: string | null;
            visibility: import("../generated/prisma/enums.ts").Visibility;
            likesCount: number;
            commentsCount: number;
        })[];
        total: number;
        pages: number;
    }>;
    getSubmissionById(submissionId: string): Promise<{
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
        likes: ({
            user: {
                id: string;
                name: string;
            };
        } & {
            id: string;
            userId: string;
            submissionId: string;
        })[];
        user: {
            id: string;
            name: string;
            avatar: string | null;
        };
        _count: {
            comments: number;
            likes: number;
        };
        recipe: {
            id: string;
            createdAt: Date;
            userId: string | null;
            title: string;
            description: string | null;
            imageUrl: string | null;
            category: string | null;
            difficulty: string | null;
            source: import("../generated/prisma/enums.ts").RecipeSource;
            externalId: string | null;
            cachedAt: Date | null;
        };
    } & {
        id: string;
        createdAt: Date;
        userId: string;
        imageUrl: string;
        recipeId: string;
        score: number | null;
        feedback: string | null;
        isFraud: boolean;
        status: import("../generated/prisma/enums.ts").SubmissionStatus;
        caption: string | null;
        visibility: import("../generated/prisma/enums.ts").Visibility;
        likesCount: number;
        commentsCount: number;
    }>;
    updateSubmission(submissionId: string, userId: string, updates: {
        caption?: string;
        visibility?: string;
    }): Promise<{
        user: {
            id: string;
            name: string;
            email: string;
            password: string;
            avatar: string | null;
            createdAt: Date;
            followersCount: number;
            followingCount: number;
            level: number;
            experience: number;
        };
        recipe: {
            id: string;
            createdAt: Date;
            userId: string | null;
            title: string;
            description: string | null;
            imageUrl: string | null;
            category: string | null;
            difficulty: string | null;
            source: import("../generated/prisma/enums.ts").RecipeSource;
            externalId: string | null;
            cachedAt: Date | null;
        };
    } & {
        id: string;
        createdAt: Date;
        userId: string;
        imageUrl: string;
        recipeId: string;
        score: number | null;
        feedback: string | null;
        isFraud: boolean;
        status: import("../generated/prisma/enums.ts").SubmissionStatus;
        caption: string | null;
        visibility: import("../generated/prisma/enums.ts").Visibility;
        likesCount: number;
        commentsCount: number;
    }>;
    deleteSubmission(submissionId: string, userId: string): Promise<{
        message: string;
    }>;
    private awardExperiencePoints;
}
export declare const submissionService: SubmissionService;
//# sourceMappingURL=submission.service.d.ts.map