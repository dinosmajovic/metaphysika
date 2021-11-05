import {
  ProductInfoWrapper,
  ProductOptions,
  ProductOption,
  ProductPrice,
  Title
} from './styled';
import transformProductName from 'constants/transformProductName';
import shortenText from 'constants/reduceTitleLength';
import useWindowSize from 'hooks/useWindowSize';

const ProductInfo = ({ options, product }) => {
  const windowWidth = useWindowSize().width;

  return (
    <ProductInfoWrapper>
      <Title>
        <span>
          {shortenText(
            transformProductName(product.name),
            windowWidth > 600 ? 30 : 14
          )}
        </span>
      </Title>
      <ProductOptions>
        {options.map((option) => {
          return (
            <ProductOption key={option.label}>
              <h2>{option.label}</h2>
              <h2>{option.value}</h2>
            </ProductOption>
          );
        })}
      </ProductOptions>
      <ProductPrice>{product.price} KM</ProductPrice>
    </ProductInfoWrapper>
  );
};

export default ProductInfo;
