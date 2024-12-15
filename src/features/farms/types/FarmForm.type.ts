export type FarmFormType = {
  farmName: string;
  landArea: string;
  landUnit: string;
  cropProductions: CropProductionsFormType[];
};

type CropProductionsFormType = {
  cropTypeId: number;
  isIrrigated: boolean;
  isInsured: boolean;
};
