import { Partner } from '@prisma/client';
export declare class TenantService {
    private tenant;
    setTenant(tenant: Partner): void;
    getTenant(): {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    };
}
