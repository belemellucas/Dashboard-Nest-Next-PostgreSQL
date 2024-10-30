"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPresenter = void 0;
class UserPresenter {
    constructor(user) {
        this.user = user;
    }
    toJSON() {
        return {
            id: this.user.id,
            email: this.user.email,
            roles: this.user.roles,
            createdAt: this.user.createdAt,
            updatedAt: this.user.updatedAt,
        };
    }
}
exports.UserPresenter = UserPresenter;
//# sourceMappingURL=user.presenter.js.map