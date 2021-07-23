import arrowDown from 'assets/icons/arrowDown.svg';
import { Options, Option, Dropdown, DropdownMenu, SizeError } from './styled';

const ProductOptions = ({
  options,
  onDropDownInputClick,
  onOptionValueClick,
  isInputErrorMessage
}) => {
  return (
    <Options>
      {options.map((option) => (
        <Option key={option.label}>
          <h2>{option.label}</h2>
          <div>
            <Dropdown
              className="dropdown"
              onClick={() => onDropDownInputClick(option.label)}
            >
              <h2>{option.value}</h2>
              <div>
                <img src={arrowDown} alt="arrow" />
              </div>
            </Dropdown>
            <DropdownMenu isOpened={option.isOpened}>
              {option.values.map((value) => (
                <span
                  key={value}
                  onClick={() => onOptionValueClick(value, option.label)}
                >
                  {value}
                </span>
              ))}
            </DropdownMenu>
          </div>
        </Option>
      ))}
      {isInputErrorMessage && <SizeError>Please select size first</SizeError>}
    </Options>
  );
};

export default ProductOptions;
