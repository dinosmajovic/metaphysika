import transformProductName from 'constants/transformProductName';

import deleteIcon from 'assets/icons/modalClose.svg';
import image from 'assets/images/1.jpeg';

import {
  Wrapper,
  ProductWrapper,
  ProductImage,
  ProductInfo,
  ProductName,
  DeleteWrapper,
  ProductPrice,
  ProductDescription
} from './styled';

const Product = ({ product, onProductDelete }) => {
  const transformProductDescription = (productDescription) => {
    let transformedDescription = productDescription.replace(
      /(<([^>]+)>)/gi,
      ''
    );

    if (transformedDescription.length > 25) {
      transformedDescription = transformedDescription.substring(0, 40) + '...';
      return transformedDescription;
    } else {
      return transformedDescription;
    }
  };

  return (
    <Wrapper>
      <DeleteWrapper>
        <img src={deleteIcon} alt="x icon" />
      </DeleteWrapper>
      <ProductWrapper>
        <ProductImage>
          <img src={image} alt="product" />
        </ProductImage>
        <ProductInfo>
          <ProductName>{transformProductName('jojo')}</ProductName>
          <ProductDescription>
            {transformProductDescription('this is porduct description')}
          </ProductDescription>
          <ProductPrice>120 KM</ProductPrice>
        </ProductInfo>
      </ProductWrapper>
    </Wrapper>
  );
};

export default Product;
