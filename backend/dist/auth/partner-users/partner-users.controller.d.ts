import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { UserPresenter } from '../users/user.presenter';
export declare class PartnerUsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(data: CreateUserDto): Promise<UserPresenter>;
}
