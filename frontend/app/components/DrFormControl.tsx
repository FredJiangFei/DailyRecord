import React from 'react';
import {
  FormControl,
  IInputProps,
  Input,
  Stack,
  WarningOutlineIcon,
} from 'native-base';

type PropType = {
  label: string;
  error: any;
  helperText?: string;
};

const DrFormControl: React.FC<IInputProps & PropType> = (props) => {
  const { label, isRequired, isDisabled, error, helperText, ...rest } = props;

  return (
    <FormControl isRequired={isRequired} isInvalid={error} isDisabled={isDisabled}>
      <Stack>
        <Input isRequired={isRequired} placeholder={label} {...rest} />
        {helperText && !error && (
          <FormControl.HelperText>{helperText}</FormControl.HelperText>
        )}
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon />}>
          {error}
        </FormControl.ErrorMessage>
      </Stack>
    </FormControl>
  );
};

export default DrFormControl;
