import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TenantService } from './tenant.service';
import { PrismaService } from '../prisma/prisma.service';
export declare class TenantInterceptor implements NestInterceptor {
    private tenantService;
    private prismaService;
    constructor(tenantService: TenantService, prismaService: PrismaService);
    intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>>;
}
