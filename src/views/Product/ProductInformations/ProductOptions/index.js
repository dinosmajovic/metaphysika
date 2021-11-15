import arrowDown from 'assets/icons/arrowDown.svg';
import { Options, Option, Dropdown, DropdownMenu, SizeError } from './styled';
import useComponentVisible from 'hooks/useComponentVisible';

const ProductOptions = ({
  options,
  onDropDownInputClick,
  onOptionValueClick,
  isInputErrorMessage
}) => {
  return (
    <Options>
      {options.map((option) => (
        <Option key={option.label} className="dropdown">
          <h2 className="dropdown">{option.label}</h2>
          <div className="dropdown">
            <Dropdown
              onClick={() => onDropDownInputClick(option.label)}
              className="dropdown"
            >
              <h2 className="dropdown"> {option.value}</h2>
              <div className="dropdown">
                <img src={arrowDown} alt="arrow" className="dropdown" />
              </div>
            </Dropdown>
            <DropdownMenu className="dropdown" isOpen={option.isOpen}>
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
