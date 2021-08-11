import {
  ProductInfoWrapper,
  ProductOptions,
  ProductOption,
  Dropdown,
  DropdownMenu,
  ProductPrice
} from '../styled';

import transformProductName from 'constants/transformProductName';
import arrowDown from 'assets/icons/arrowDown.svg';

const ProductInfo = ({ product, options, onInputClick, onValueClick }) => {
  return (
    <ProductInfoWrapper>
      <span>{transformProductName(product.name)}</span>
      <ProductOptions>
        {options.map((option) => {
          return (
            <ProductOption key={option.label}>
              <h2>{option.label}</h2>
              <div>
                <Dropdown
                  className="dropdown"
                  isOpened={option.isOpened}
                  onClick={() => onInputClick(option.label)}
                >
                  <h2>{option.value}</h2>
                  <div>
                    <img src={arrowDown} alt="Arrow picture" />
                  </div>
                </Dropdown>
                <DropdownMenu isOpened={option.isOpened}>
                  {option.values.map((value) => {
                    return (
                      <span
                        key={value}
                        onClick={() => onValueClick(value, option.label)}
                      >
                        {value}
                      </span>
                    );
                  })}
                </DropdownMenu>
              </div>
            </ProductOption>
          );
        })}
      </ProductOptions>
      <ProductPrice>
        {product.priceValue} {product.priceCurrency}
      </ProductPrice>
    </ProductInfoWrapper>
  );
};

export default ProductInfo;
