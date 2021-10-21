import transformProductName from 'constants/transformProductName';

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
  return (
    <Wrapper type={type}>
      {type === 'checkout' ? null : (
        <DeleteWrapper onClick={onProductDelete}>
          <img src={xIcon} alt="x icon" />
        </DeleteWrapper>
      )}
      <StyledLink to={product.path}>
        <ProductWrapper>
          <ProductImage>
            <img src={product.mainImg} alt="Product"></img>
          </ProductImage>
          <ProductInfo type={type}>
            <ProductName>{transformProductName(product.name)}</ProductName>

            <ProductOptions>
              <span>Size: {product.size}</span>
              <span>Quantity: {product.quantity}</span>
            </ProductOptions>
            <ProductPrice>
              {product.price} {product.currencyCode}
            </ProductPrice>
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
