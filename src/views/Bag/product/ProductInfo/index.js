import {
  ProductInfoWrapper,
  ProductOptions,
  ProductOption,
  ProductPrice,
  DeleteWrapper,
  Title
} from './styled';
import transformProductName from 'constants/transformProductName';
import shortenText from 'constants/reduceTitleLength';
import xIcon from 'assets/icons/modalClose.svg';
import useWindowSize from 'hooks/useWindowSize';

const ProductInfo = ({ product, options, onProductDelete }) => {
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
        <DeleteWrapper onClick={() => onProductDelete(product)}>
          <img src={xIcon} alt="x icon" />
        </DeleteWrapper>
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
