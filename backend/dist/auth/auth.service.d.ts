import { LoginDto } from './login.dto';
import { UsersService } from './users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    login(data: LoginDto): Promise<{
        user: {
            id: string;
            name: string;
            email: string;
            roles: import(".prisma/client").Prisma.JsonValue;
            createdAt: Date;
            updatedAt: Date;
        };
        backendTokens: {
            accessToken: string;
            refreshToken: string;
            expiresIn: number;
        };
    }>;
    validateUser(dto: LoginDto): Promise<{
        id: string;
        name: string;
        email: string;
        roles: import(".prisma/client").Prisma.JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }>;
    refreshToken(user: any): Promise<{
        accessToken: string;
        refreshToken: string;
        expiresIn: number;
    }>;
}
