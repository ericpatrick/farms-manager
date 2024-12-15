import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid2 from '@mui/material/Grid2';
import Switch from '@mui/material/Switch';
import { CropProductionState } from '../../types/CropProductionState';
import { useState } from 'react';
import {
  cropCheckBoxStyles,
  cropFormIrrigatedFieldStyles,
  cropFormItemContainer,
} from './CropProductionFormItem.styles';

type CropProductionFormItemProps = {
  id: number;
  cropName: string;
  onCropChange?: (state: CropProductionState) => void;
};

export function CropProductionFormItem({ id, cropName, onCropChange }: CropProductionFormItemProps) {
  const [cropState, setCropState] = useState<CropProductionState>({
    id,
    cropSelected: false,
    isIrrigated: false,
    isInsured: false,
  });
  const irrigatedLabel = 'Is Irrigated';
  const insuredLabel = 'Is Insured';

  const handleChange = (field: keyof Omit<CropProductionState, 'id'>) => {
    let state: CropProductionState = cropState;
    switch (field) {
      case 'cropSelected':
        state = { ...state, cropSelected: !state.cropSelected };
        break;
      case 'isIrrigated':
        state = { ...state, isIrrigated: !state.isIrrigated };
        break;
      case 'isInsured':
        state = { ...state, isInsured: !state.isInsured };
    }
    setCropState(state);
    onCropChange?.(state);
  };

  return (
    <Grid2 container sx={cropFormItemContainer}>
      <Grid2 size={{ xs: 4, sm: 3, md: 2 }}>
        <FormControlLabel
          sx={cropCheckBoxStyles}
          control={
            <Checkbox name={cropName} checked={cropState.cropSelected} onChange={() => handleChange('cropSelected')} />
          }
          label={cropName}
        />
      </Grid2>
      <Grid2 size={{ xs: 8, sm: 9, md: 10 }}>
        <FormControlLabel
          control={
            <Switch
              checked={cropState.isIrrigated}
              disabled={!cropState.cropSelected}
              onChange={() => handleChange('isIrrigated')}
            />
          }
          label={irrigatedLabel}
          sx={cropFormIrrigatedFieldStyles}
        />
        <FormControlLabel
          control={
            <Switch
              checked={cropState.isInsured}
              disabled={!cropState.cropSelected}
              onChange={() => handleChange('isInsured')}
            />
          }
          label={insuredLabel}
        />
      </Grid2>
    </Grid2>
  );
}
