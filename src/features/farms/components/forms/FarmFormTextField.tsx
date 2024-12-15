import TextField from '@mui/material/TextField';
import { FarmFormType } from '../../types/FarmForm.type';
import { UseFormRegister } from 'react-hook-form';
import { textFieldStyles } from './FarmFormTextField.styles';
import { SxProps } from '@mui/material/styles';
import { mergeSx } from '../../../../utils/styles.utils';

type FarmFormTextFieldProps = {
  field: keyof FarmFormType;
  label: string;
  errorMessage?: string;
  register: UseFormRegister<FarmFormType>;
  sx?: SxProps;
  type?: React.HTMLInputTypeAttribute | undefined;
};

export function FarFormTextField({
  label,
  field,
  register,
  errorMessage,
  sx = {},
  type = 'text',
}: FarmFormTextFieldProps) {
  return (
    <TextField
      error={!!errorMessage}
      {...register(field, { required: 'Required Field' })}
      label={label}
      type={type}
      helperText={errorMessage}
      sx={mergeSx(textFieldStyles, sx)}
    />
  );
}
