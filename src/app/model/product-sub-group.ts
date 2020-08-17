import { ProductGroup } from '../components/product-group/product-group.component';

export interface ProductSubGroup {
    masterID?: number;
    masterName: string;
    shortname: string;
    companyId?: number;
    productGroups?: ProductGroup[];
}