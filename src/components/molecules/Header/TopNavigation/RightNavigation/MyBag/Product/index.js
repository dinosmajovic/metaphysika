import transformProductName from 'constants/transformProductName';
// import Link from 'next/link';
import xIcon from 'assets/icons/modalClose.svg';
import likeHeartOutlined from 'assets/icons/likeHeart/likeHeartOutlined.svg';
import image from 'assets/images/1.jpeg';

import {
  Wrapper,
  ProductWrapper,
  ProductImage,
  ProductInfo,
  ProductName,
  DeleteWrapper,
  ProductOptions,
  ProductPrice,
  LikeWrapper
} from './styled';

const Product = ({ product, onProductDelete, type }) => {
  return (
    <Wrapper>
      {type === 'checkout' ? null : (
        <DeleteWrapper onClick={onProductDelete}>
          <img src={xIcon} alt="x icon" />
        </DeleteWrapper>
      )}
      {/* <Link href={product.link}> */}
      <ProductWrapper>
        <ProductImage>
          <img src={image} alt="Product image"></img>
        </ProductImage>
        <ProductInfo type={type}>
          <ProductName>{transformProductName('JOJO')}</ProductName>

          <ProductOptions>
            <span>Size: 50</span>
            <span>Quantity: 3</span>
          </ProductOptions>
          <ProductPrice>50 BAM</ProductPrice>
          {type === 'checkout' ? null : (
            <LikeWrapper>
              <img src={likeHeartOutlined} alt="like icon" />
            </LikeWrapper>
          )}
        </ProductInfo>
      </ProductWrapper>
      {/* </Link> */}
    </Wrapper>
  );
};

export default Product;
