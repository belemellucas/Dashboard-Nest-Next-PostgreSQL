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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users/users.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt_1 = require("bcrypt");
const EXPIRE_TIME = 20 * 1000;
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async login(data) {
        const user = await this.validateUser(data);
        const payload = {
            username: user.email,
            sub: {
                name: user.name,
            },
        };
        return {
            user,
            backendTokens: {
                accessToken: await this.jwtService.signAsync(payload, {
                    expiresIn: '20s',
                    secret: '123456',
                }),
                refreshToken: await this.jwtService.signAsync(payload, {
                    expiresIn: '7d',
                    secret: '123456',
                }),
                expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
            }
        };
    }
    async validateUser(dto) {
        const user = await this.userService.findByEmail(dto.email);
        if (user && (await (0, bcrypt_1.compare)(dto.password, user.password))) {
            const { password, ...result } = user;
            return result;
        }
        throw new common_1.UnauthorizedException();
    }
    async refreshToken(user) {
        const payload = {
            username: user.username,
            sub: user.sub
        };
        return {
            accessToken: await this.jwtService.signAsync(payload, {
                expiresIn: '20s',
                secret: '123456'
            }),
            refreshToken: await this.jwtService.signAsync(payload, {
                expiresIn: '7d',
                secret: '123456'
            }),
            expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map