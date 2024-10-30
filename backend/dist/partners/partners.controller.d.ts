import { PartnersService } from './partners.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
export declare class PartnersController {
    private readonly partnersService;
    constructor(partnersService: PartnersService);
    create(createPartnerDto: CreatePartnerDto, req: any): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
