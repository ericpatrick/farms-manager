import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FarmFormType } from '../../types/FarmForm.type';
import { FarFormTextField } from './FarmFormTextField';
import { CropProductionForm } from './CropProductionsForm';
import { farmFormContainerStyles, farmFormSubmitButtonStyles, farmFormTextFiledStyles } from './FarmForm.styles';
import { useAddFarm } from '../../hooks/useAddFarm';
import { useNavigate } from 'react-router';

export function FarmForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FarmFormType>({
    defaultValues: {
      cropProductions: [],
    },
  });
  const { loading, addFarm } = useAddFarm();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FarmFormType> = async (data) => {
    await addFarm(data);
    navigate(-1);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={farmFormContainerStyles}>
      <FarFormTextField
        label="Farm Name"
        field="farmName"
        register={register}
        errorMessage={errors.farmName?.message}
        sx={farmFormTextFiledStyles}
      />
      <FarFormTextField
        label="Land Area"
        field="landArea"
        register={register}
        errorMessage={errors.landArea?.message}
        type="number"
        sx={farmFormTextFiledStyles}
      />
      <FarFormTextField
        label="Unit of Measure"
        field="landUnit"
        register={register}
        errorMessage={errors.landUnit?.message}
        sx={farmFormTextFiledStyles}
      />
      <CropProductionForm control={control} errorMessage={errors.cropProductions?.message} />
      <Button variant="contained" disabled={loading} type="submit" sx={farmFormSubmitButtonStyles}>
        {loading ? 'Saving...' : 'Save'}
      </Button>
    </Box>
  );
}
