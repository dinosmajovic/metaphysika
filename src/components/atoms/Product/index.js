import transformProductName from 'constants/transformProductName';
import useWindowSize from 'hooks/useWindowSize';
import shortenText from 'constants/reduceTitleLength';

import xIcon from 'assets/icons/modalClose.svg';
import likeHeartOutlined from 'assets/icons/likeHeart/likeHeartOutlined.svg';

import {
  Wrapper,
  ProductWrapper,
  ProductImage,
  ProductInfo,
  ProductName,
  DeleteWrapper,
  ProductOptions,
  ProductPrice,
  LikeWrapper,
  StyledLink
} from './styled';

const Product = ({ product, onProductDelete, type }) => {
  const windowWidth = useWindowSize().width;
  return (
    <Wrapper type={type}>
      {type === 'checkout' ? null : (
        <DeleteWrapper onClick={onProductDelete}>
          <img src={xIcon} alt="x icon" />
        </DeleteWrapper>
      )}
      <StyledLink to={product.pathToProduct}>
        <ProductWrapper>
          <ProductImage>
            <img src={product.mainImg} alt="Product"></img>
          </ProductImage>
          <ProductInfo type={type}>
            <ProductName>
              {shortenText(
                transformProductName(product.name),
                windowWidth > 600 ? 30 : 15
              )}
            </ProductName>

            <ProductOptions>
              <span>Size: {product.size}</span>
              <span>Quantity: {product.quantity}</span>
            </ProductOptions>
            <ProductPrice>{product.price} KM</ProductPrice>
            {type === 'checkout' ? null : (
              <LikeWrapper>
                <img src={likeHeartOutlined} alt="like icon" />
              </LikeWrapper>
            )}
          </ProductInfo>
        </ProductWrapper>
      </StyledLink>
    </Wrapper>
  );
};

export default Product;
