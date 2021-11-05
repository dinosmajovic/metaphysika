import { StyledInput, Label, InputContainer, InputError } from './styled';
import get from 'lodash/get';
import InputMask from 'react-input-mask';

const Input = ({
  label,
  placeholder,
  formik,
  name,
  isMasked = false,
  mask,
  maskChar = '',
  type,
  onKeyDown
}) => {
  const isValid = !(get(formik.touched, name) && get(formik.errors, name));

  return (
    <InputContainer onKeyDown={onKeyDown}>
      {isMasked ? (
        <InputMask
          maskChar={maskChar}
          {...formik.getFieldProps(name)}
          mask={mask}
        >
          {(inputProps) => (
            <StyledInput
              isValid={isValid}
              placeholder={placeholder || ' '}
              {...inputProps}
              type={type}
            />
          )}
        </InputMask>
      ) : (
        <StyledInput
          isValid={isValid}
          {...formik.getFieldProps(name)}
          placeholder={placeholder || ' '}
          type={type}
        />
      )}

      <Label>{label}</Label>
      {!isValid && <InputError>{get(formik.errors, name)}</InputError>}
    </InputContainer>
  );
};

export default Input;
