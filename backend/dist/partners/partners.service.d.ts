import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class PartnersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createPartnerDto: CreatePartnerDto & {
        userId: number;
    }): Promise<{
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
    findOne(id: number): string;
    update(id: number, updatePartnerDto: UpdatePartnerDto): string;
    remove(id: number): string;
}
