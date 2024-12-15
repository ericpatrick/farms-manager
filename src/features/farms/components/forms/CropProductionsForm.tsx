import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { useCropTypes } from '../../hooks/useCropTypes';
import { Control, Controller } from 'react-hook-form';
import { CropProductionFormItem } from './CropProductionFormItem';
import { CropProductionState } from '../../types/CropProductionState';
import { FarmFormType } from '../../types/FarmForm.type';

type CropProductionFormProps = {
  control: Control<FarmFormType, unknown>;
  errorMessage?: string;
};

export function CropProductionForm({ control, errorMessage }: CropProductionFormProps) {
  const { cropTypes } = useCropTypes();

  return (
    <FormControl component="fieldset" error={!!errorMessage}>
      <FormLabel component="legend">Crop Production Options</FormLabel>
      <FormGroup>
        <Controller
          name="cropProductions"
          control={control}
          rules={{
            validate: (value) => value.length > 0 || 'You must have at least one crop',
          }}
          render={({ field }) => {
            const { value: fieldValue = [], onChange } = field;

            const handleCropChange = (cropValue: CropProductionState) => {
              const { cropSelected } = cropValue;

              let newFiledValue = fieldValue.filter((item) => item.cropTypeId !== cropValue.id);
              if (cropSelected) {
                const newValue = {
                  cropTypeId: cropValue.id,
                  isIrrigated: cropValue.isIrrigated,
                  isInsured: cropValue.isInsured,
                };
                newFiledValue = [...newFiledValue, newValue];
              }
              onChange(newFiledValue);
            };

            return (
              <>
                {cropTypes.map((option) => (
                  <CropProductionFormItem
                    key={option.id}
                    id={parseInt(option.id)}
                    cropName={option.name}
                    onCropChange={handleCropChange}
                  />
                ))}
              </>
            );
          }}
        />
      </FormGroup>
      {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
}
