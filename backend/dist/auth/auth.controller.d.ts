import { LoginDto } from './login.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(data: LoginDto): Promise<{
        user: {
            id: number;
            name: string;
            email: string;
            roles: import("@prisma/client/runtime/library").JsonValue;
            createdAt: Date;
            updatedAt: Date;
        };
        backendTokens: {
            accessToken: string;
            refreshToken: string;
            expiresIn: number;
        };
    }>;
    refreshToken(req: any): Promise<{
        accessToken: string;
        refreshToken: string;
        expiresIn: number;
    }>;
}
