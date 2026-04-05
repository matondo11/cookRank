export declare class AuthService {
    register(email: string, name: string, password: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    login(email: string, password: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refreshTokens(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(refreshToken: string): Promise<void>;
    private createRefreshToken;
    private rotateRefreshToken;
    private generateAccessToken;
}
export declare const authService: AuthService;
//# sourceMappingURL=auth.service.d.ts.map