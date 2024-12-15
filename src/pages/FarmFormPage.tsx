import Typography from '@mui/material/Typography';
import { FarmForm } from '../features/farms/components/forms/FarmForm';
import { farmFormHeaderTitleStules } from './FarmFormPage.styles';

export function FarmFormPage() {
  return (
    <>
      <Typography variant="h4" sx={farmFormHeaderTitleStules}>
        New Farm
      </Typography>
      <FarmForm></FarmForm>
    </>
  );
}
