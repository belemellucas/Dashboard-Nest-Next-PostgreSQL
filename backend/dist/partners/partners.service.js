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
exports.PartnersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PartnersService = class PartnersService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createPartnerDto) {
        const partner = await this.prismaService.$transaction(async (prisma) => {
            const partner = await prisma.partner.create({
                data: { name: createPartnerDto.name },
            });
            await prisma.partnerUser.create({
                data: {
                    userId: createPartnerDto.userId,
                    partnerId: partner.id,
                },
            });
            return partner;
        });
        return partner;
    }
    findAll() {
        return this.prismaService.partner.findMany();
    }
    findOne(id) {
        return `This action returns a #${id} partner`;
    }
    update(id, updatePartnerDto) {
        return `This action updates a #${id} partner`;
    }
    remove(id) {
        return `This action removes a #${id} partner`;
    }
};
exports.PartnersService = PartnersService;
exports.PartnersService = PartnersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PartnersService);
//# sourceMappingURL=partners.service.js.map