import { User } from '@prisma/client';
export declare class UserPresenter {
    readonly user: User;
    constructor(user: User);
    toJSON(): {
        id: number;
        email: string;
        roles: import("@prisma/client/runtime/library").JsonValue;
        createdAt: Date;
        updatedAt: Date;
    };
}
