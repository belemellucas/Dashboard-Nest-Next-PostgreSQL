import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserPresenter } from './user.presenter';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(data: CreateUserDto): Promise<UserPresenter>;
    getUserProfile(id: string): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        roles: import("@prisma/client/runtime/library").JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
