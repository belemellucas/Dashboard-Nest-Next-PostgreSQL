"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnerUsersController = void 0;
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("../users/dto/create-user.dto");
const users_service_1 = require("../users/users.service");
const user_presenter_1 = require("../users/user.presenter");
let PartnerUsersController = class PartnerUsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async create(data) {
        const user = await this.usersService.createPartnerUser(data);
        return new user_presenter_1.UserPresenter(user);
    }
};
exports.PartnerUsersController = PartnerUsersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], PartnerUsersController.prototype, "create", null);
exports.PartnerUsersController = PartnerUsersController = __decorate([
    (0, common_1.Controller)('partners/users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], PartnerUsersController);
//# sourceMappingURL=partner-users.controller.js.map