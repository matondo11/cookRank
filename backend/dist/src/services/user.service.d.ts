export declare class UserService {
    getProfile(userId: string): Promise<{
        badges: {
            id: string;
            name: string;
            userId: string;
            description: string | null;
            iconUrl: string | null;
            unlockedAt: Date;
        }[];
        followers: ({
            follower: {
                id: string;
                name: string;
                avatar: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            followerId: string;
            followingId: string;
        })[];
        following: ({
            following: {
                id: string;
                name: string;
                avatar: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            followerId: string;
            followingId: string;
        })[];
        _count: {
            recipes: number;
            submissions: number;
            followers: number;
            following: number;
        };
    } & {
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
    }>;
    getUserById(userId: string): Promise<{
        badges: {
            id: string;
            name: string;
            userId: string;
            description: string | null;
            iconUrl: string | null;
            unlockedAt: Date;
        }[];
        followers: ({
            follower: {
                id: string;
                name: string;
                avatar: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            followerId: string;
            followingId: string;
        })[];
        following: ({
            following: {
                id: string;
                name: string;
                avatar: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            followerId: string;
            followingId: string;
        })[];
        _count: {
            recipes: number;
            submissions: number;
            followers: number;
            following: number;
        };
    } & {
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
    }>;
    getUsers(page: number, limit: number, search?: string): Promise<{
        users: ({
            badges: {
                id: string;
                name: string;
                userId: string;
                description: string | null;
                iconUrl: string | null;
                unlockedAt: Date;
            }[];
            _count: {
                recipes: number;
                submissions: number;
                followers: number;
                following: number;
            };
        } & {
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
        })[];
        total: number;
        pages: number;
    }>;
    updateProfile(userId: string, updates: {
        name?: string;
        avatar?: string;
    }): Promise<{
        badges: {
            id: string;
            name: string;
            userId: string;
            description: string | null;
            iconUrl: string | null;
            unlockedAt: Date;
        }[];
        _count: {
            recipes: number;
            submissions: number;
        };
    } & {
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
    }>;
    followUser(userId: string, targetUserId: string): Promise<{
        message: string;
    }>;
    unfollowUser(userId: string, targetUserId: string): Promise<{
        message: string;
    }>;
    getFollowers(userId: string, page: number, limit: number): Promise<{
        followers: ({
            follower: {
                id: string;
                name: string;
                avatar: string | null;
                _count: {
                    followers: number;
                };
            };
        } & {
            id: string;
            createdAt: Date;
            followerId: string;
            followingId: string;
        })[];
        total: number;
        pages: number;
    }>;
    getFollowing(userId: string, page: number, limit: number): Promise<{
        following: ({
            following: {
                id: string;
                name: string;
                avatar: string | null;
                _count: {
                    followers: number;
                };
            };
        } & {
            id: string;
            createdAt: Date;
            followerId: string;
            followingId: string;
        })[];
        total: number;
        pages: number;
    }>;
}
export declare const userService: UserService;
//# sourceMappingURL=user.service.d.ts.map