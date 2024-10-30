import { User } from '@prisma/client';
export declare class UserPresenter {
    readonly user: User;
    constructor(user: User);
    toJSON(): {
        id: string;
        email: string;
        roles: import(".prisma/client").Prisma.JsonValue;
        createdAt: Date;
        updatedAt: Date;
    };
}
