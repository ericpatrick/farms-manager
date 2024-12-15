import { CropProductionType, FarmType } from './Farm.type';

export type FarmFormType = Omit<FarmType, 'id' | 'cropProductions'> & { cropProductions: CropProductionsFormType[] };

type CropProductionsFormType = Omit<CropProductionType, 'id'>;
