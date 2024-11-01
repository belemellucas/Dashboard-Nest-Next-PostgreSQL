import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    create(createEventDto: CreateEventDto): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        partnerId: number;
        description: string;
        date: Date;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        partnerId: number;
        description: string;
        date: Date;
    }[]>;
    findOne(id: string): string;
    update(id: string, updateEventDto: UpdateEventDto): string;
    remove(id: string): string;
}
