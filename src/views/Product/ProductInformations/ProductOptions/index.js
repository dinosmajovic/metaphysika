import arrowDown from 'assets/icons/arrowDown.svg';
import { Options, Option, Dropdown, DropdownMenu } from './styled';

const ProductOptions = ({ options, onInputClick, onValueClick }) => {
  return (
    <Options>
      {options.map((option) => {
        return (
          <Option key={option.label}>
            <h2>{option.label}</h2>
            <div>
              <Dropdown onClick={() => onInputClick(option.label)}>
                <h2>{option.value}</h2>
                <div>
                  <img src={arrowDown} alt="Arrow picture" />
                </div>
              </Dropdown>
              <DropdownMenu isOpened={option.isOpened}>
                {option.values.map((value) => (
                  <span
                    onClick={() => onValueClick(value, option.label)}
                    key={value}
                  >
                    {value}
                  </span>
                ))}
              </DropdownMenu>
            </div>
          </Option>
        );
      })}
    </Options>
  );
};

export default ProductOptions;
