import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from '../prisma/prisma.service';
import { TenantService } from '../tenant/tenant.service';
export declare class EventsService {
    private prismaService;
    private tenantService;
    constructor(prismaService: PrismaService, tenantService: TenantService);
    create(createEventDto: CreateEventDto): import(".prisma/client").Prisma.Prisma__EventClient<{
        id: string;
        name: string;
        description: string;
        date: Date;
        createdAt: Date;
        updatedAt: Date;
        partnerId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        description: string;
        date: Date;
        createdAt: Date;
        updatedAt: Date;
        partnerId: string;
    }[]>;
    findOne(id: number): string;
    update(id: number, updateEventDto: UpdateEventDto): string;
    remove(id: number): string;
}
