import { StyledSelect, Label, SelectContainer, InputError } from './styled';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

const Select = ({ label, placeholder, formik, name, options }) => {
  const isValid = !(get(formik.touched, name) && get(formik.errors, name));
  const selectedOption = get(formik.values, name);

  const generateOptions = () => {
    const newOptions = [...options];
    newOptions.unshift({ label: '', value: '' });

    return newOptions;
  };

  return (
    <SelectContainer>
      <StyledSelect
        {...formik.getFieldProps(name)}
        isValid={isValid}
        hasValue={isEmpty(selectedOption)}
      >
        {generateOptions().map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
      <Label>{label}</Label>
      {!isValid && <InputError>{get(formik.errors, name)}</InputError>}
    </SelectContainer>
  );
};

export default Select;
