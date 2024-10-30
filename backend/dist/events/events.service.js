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
exports.EventsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const tenant_service_1 = require("../tenant/tenant.service");
let EventsService = class EventsService {
    constructor(prismaService, tenantService) {
        this.prismaService = prismaService;
        this.tenantService = tenantService;
    }
    create(createEventDto) {
        return this.prismaService.event.create({
            data: {
                name: createEventDto.name,
                description: createEventDto.description,
                date: new Date(createEventDto.date),
                partnerId: this.tenantService.getTenant().id,
            },
        });
    }
    findAll() {
        return this.prismaService.event.findMany({
            where: {
                partnerId: this.tenantService.getTenant().id,
            },
        });
    }
    findOne(id) {
        return `This action returns a #${id} event`;
    }
    update(id, updateEventDto) {
        return `This action updates a #${id} event`;
    }
    remove(id) {
        return `This action removes a #${id} event`;
    }
};
exports.EventsService = EventsService;
exports.EventsService = EventsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        tenant_service_1.TenantService])
], EventsService);
//# sourceMappingURL=events.service.js.map