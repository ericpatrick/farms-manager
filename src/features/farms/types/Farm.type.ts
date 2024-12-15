export type FarmType = {
  id: string;
  farmName: string;
  landArea: number;
  landUnit: string;
  address?: string;
  cropProductions: CropProductionType[];
};

export type CropProductionType = {
  id: number;
  cropTypeId: number;
  isIrrigated: boolean;
  isInsured: boolean;
};
