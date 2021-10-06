import transformProductName from 'constants/transformProductName';
import deleteIcon from 'assets/icons/modalClose.svg';
import { Link } from 'react-router-dom';
import { addOrDeleteFromWishlist } from 'state/wishlist';
import { useDispatch } from 'react-redux';

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

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const fullDescription = product.description?.split('<ul');

  let description = fullDescription?.[0];

  const transformProductDescription = (productDescription) => {
    let transformedDescription = productDescription.replace(
      /(<([^>]+)>)/gi,
      ''
    );

    if (transformedDescription.length > 25) {
      transformedDescription = transformedDescription.substring(0, 60) + '...';
      return transformedDescription;
    } else {
      return transformedDescription;
    }
  };

  description = transformProductDescription(description);

  const onAddOrDeleteFromWishlist = (product) => {};

  return (
    <Wrapper>
      <DeleteWrapper onClick={() => onAddOrDeleteFromWishlist(product)}>
        <img src={deleteIcon} alt="x icon" />
      </DeleteWrapper>
      <ProductWrapper>
        <Link to={`${product.brandPath}${product.path}`}>
          <ProductImage>
            <img src={product.mainImg} alt="product" />
          </ProductImage>
        </Link>
        <ProductInfo>
          <ProductName>{transformProductName(product.name)}</ProductName>
          <ProductDescription>{description}</ProductDescription>
          <ProductPrice>{product.price}</ProductPrice>
        </ProductInfo>
      </ProductWrapper>
    </Wrapper>
  );
};

export default Product;
