import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    create(createEventDto: CreateEventDto): Promise<{
        id: string;
        name: string;
        description: string;
        date: Date;
        createdAt: Date;
        updatedAt: Date;
        partnerId: string;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        description: string;
        date: Date;
        createdAt: Date;
        updatedAt: Date;
        partnerId: string;
    }[]>;
    findOne(id: string): string;
    update(id: string, updateEventDto: UpdateEventDto): string;
    remove(id: string): string;
}
