import {
  Container,
  ProductImage,
  ProductDescription,
  ProductName,
  DeleteProduct
} from './styled';
import closeModalIcon from 'assets/icons/modalClose.svg';
import { Link } from 'react-router-dom';
import transformProductName from 'constants/transformProductName';

import { useDispatch } from 'react-redux';
import reduceTitleLength from 'constants/reduceTitleLength';

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
      transformedDescription = transformedDescription.substring(0, 240) + '...';
      return transformedDescription;
    } else {
      return transformedDescription;
    }
  };

  description = transformProductDescription(description);

  const onAddOrDeleteFromWishlist = (product) => {};

  return (
    <Container>
      <DeleteProduct onClick={() => onAddOrDeleteFromWishlist(product)}>
        <img src={closeModalIcon} alt="delete icon" />
      </DeleteProduct>
      <Link to={`${product.brandPath}${product.path}`}>
        <ProductImage>
          <img src={product.mainImg} alt="product" />
        </ProductImage>
      </Link>
      <ProductName>{transformProductName(product.name)}</ProductName>
      <ProductDescription>
        {reduceTitleLength(description, 185)}
      </ProductDescription>
    </Container>
  );
};

export default Product;
