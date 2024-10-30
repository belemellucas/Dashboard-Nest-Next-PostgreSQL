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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const user_roles_1 = require("./user-roles");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    createPartnerUser(data) {
        return this.prismaService.user.create({
            data: {
                ...data,
                password: this.generateHash(data.password),
                roles: [user_roles_1.UserRoles.PARTNER],
            },
        });
    }
    createCommonUser(data) {
        return this.prismaService.user.create({
            data: {
                ...data,
                password: this.generateHash(data.password),
                roles: [user_roles_1.UserRoles.USER],
            },
        });
    }
    generateHash(password) {
        return bcrypt.hashSync(password, 10);
    }
    findByEmail(email) {
        if (!email) {
            throw new Error("Email must be provided");
        }
        return this.prismaService.user.findUnique({
            where: {
                email: email
            },
        });
    }
    async findById(id) {
        const numericId = parseInt(id, 10);
        if (isNaN(numericId)) {
            throw new Error('Invalid user ID format. Please provide a valid numeric ID.');
        }
        return await this.prismaService.user.findUnique({
            where: { id: numericId },
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map