import { FarmType } from '../types/Farm.type';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { CropProductionCard } from './CropProductionCard';
import { useCropTypes } from '../hooks/useCropTypes';
import { farCardContainerStyles, farmCardAreaFieldStyles } from './FarmCard.styles';

export type FarmCardProps = {
  farm: FarmType;
  onDelete?: (farm: FarmType) => void;
};

export function FarmCard({ farm, onDelete }: FarmCardProps) {
  const { loading, cropTypes } = useCropTypes();
  const { farmName, landArea, landUnit, address, cropProductions } = farm;

  const cropTypesMap = cropTypes.reduce(
    (acc, item) => {
      acc[item.id] = item.name;
      return acc;
    },
    {} as Record<string, string>,
  );
  const handleDeleteFarm = () => {
    onDelete?.(farm);
  };

  return (
    <Card sx={farCardContainerStyles}>
      <CardContent>
        <Typography variant="h5">{farmName}</Typography>
        <Stack direction="row" justifyContent="space-between" flexWrap="wrap">
          <Typography variant="body2" sx={farmCardAreaFieldStyles}>
            <strong>Área:</strong>
            <br />
            {landArea} {landUnit}
          </Typography>
          {address && (
            <Typography variant="body2" sx={farmCardAreaFieldStyles}>
              <strong>Address:</strong>
              <br />
              {address}
            </Typography>
          )}
          <Box>
            <Typography variant="body2">
              <strong>Crop Productions:</strong>
            </Typography>
            <Stack direction="row">
              {!loading &&
                cropProductions.map((crop) => (
                  <CropProductionCard
                    key={`${crop.id ?? ''}-${crop.cropTypeId ?? ''}`}
                    cropName={cropTypesMap[crop.cropTypeId]}
                    isIrrigated={crop.isIrrigated}
                    isInsured={crop.isInsured}
                  />
                ))}
            </Stack>
          </Box>
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small" color="error" onClick={handleDeleteFarm}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
