import arrowDown from 'assets/icons/arrowDown.svg';
import { Options, Option, Dropdown, DropdownMenu, SizeError } from './styled';
import useComponentVisible from 'hooks/useComponentVisible';

const ProductOptions = ({
  options,
  onDropDownInputClick,
  onOptionValueClick,
  isInputErrorMessage
}) => {
  const { ref } = useComponentVisible(true);

  // const { ref, isComponentVisible } = useComponentVisible(true);
  // console.log(isComponentVisible);

  return (
    <Options>
      {options.map((option) => (
        <Option key={option.label}>
          <h2>{option.label}</h2>
          <div>
            <Dropdown onClick={() => onDropDownInputClick(option.label)}>
              <h2> {option.value}</h2>
              <div>
                <img src={arrowDown} alt="arrow" />
              </div>
            </Dropdown>
            <DropdownMenu isOpen={option.isOpen} ref={ref}>
              {option.values.map((value) => {
                return (
                  <span
                    key={value}
                    onClick={() => onOptionValueClick(value, option.label)}
                  >
                    {value}
                  </span>
                );
              })}
            </DropdownMenu>
          </div>
        </Option>
      ))}
      {isInputErrorMessage && <SizeError>Please select size first</SizeError>}
    </Options>
  );
};

export default ProductOptions;
