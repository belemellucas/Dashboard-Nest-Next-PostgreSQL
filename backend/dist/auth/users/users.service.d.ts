import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    createPartnerUser(data: CreateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        name: string;
        email: string;
        password: string;
        roles: import("@prisma/client/runtime/library").JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    createCommonUser(data: CreateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        name: string;
        email: string;
        password: string;
        roles: import("@prisma/client/runtime/library").JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    generateHash(password: string): string;
    findByEmail(email: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        name: string;
        email: string;
        password: string;
        roles: import("@prisma/client/runtime/library").JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findById(id: string): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        roles: import("@prisma/client/runtime/library").JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
