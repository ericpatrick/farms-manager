import { Card, Typography } from '@mui/material';
import { cropProductionCardContainerStyles, cropProductionCardNameStyles } from './CropProductionCard.styles';

type CropProductionCard = {
  cropName: string;
  isIrrigated: boolean;
  isInsured: boolean;
};

export function CropProductionCard({ cropName = '', isIrrigated, isInsured }: CropProductionCard) {
  return (
    <Card sx={cropProductionCardContainerStyles}>
      <Typography sx={cropProductionCardNameStyles}>{cropName.toLowerCase()}</Typography>
      <Typography>Is Irrigated: {isIrrigated ? 'Yes' : 'No'}</Typography>
      <Typography>Is Insured: {isInsured ? 'Yes' : 'No'}</Typography>
    </Card>
  );
}
