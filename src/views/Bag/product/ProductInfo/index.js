import {
  ProductInfoWrapper,
  ProductOptions,
  ProductOption,
  Dropdown,
  ProductPrice
} from '../styled';
import transformProductName from 'constants/transformProductName';

const ProductInfo = ({ product, options }) => {
  return (
    <ProductInfoWrapper>
      <span>{transformProductName(product.name)}</span>
      <ProductOptions>
        {options.map((option) => {
          return (
            <ProductOption key={option.label}>
              <h2>{option.label}</h2>
              <div>
                <Dropdown className="dropdown">
                  <h2>{option.value}</h2>
                </Dropdown>
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
