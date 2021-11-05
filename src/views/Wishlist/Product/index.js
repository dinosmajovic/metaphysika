import {
  Container,
  ProductImage,
  ProductDescription,
  ProductName,
  DeleteProduct,
  LoadingWrapper
} from './styled';
import closeModalIcon from 'assets/icons/modalClose.svg';
import transformProductName from 'constants/transformProductName';
import { useDispatch, useSelector } from 'react-redux';
import reduceTitleLength from 'constants/reduceTitleLength';
import { deleteFromWishlist } from 'state/wishlist';
import { useState } from 'react';
import Loader from 'components/atoms/Loader/index';
import { StyledLink } from './styled';

const Product = ({ product, isError }) => {
  const [isWishlistLoading, setIsWishlistLoading] = useState(false);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);

  const onAddOrDeleteFromWishlist = (productId) => {
    setIsWishlistLoading(true);
    dispatch(deleteFromWishlist({ productId, token }));
  };

  if (isError && isWishlistLoading) {
    setIsWishlistLoading(false);
  }

  if (isWishlistLoading) {
    return (
      <Container>
        <LoadingWrapper>
          <Loader />
        </LoadingWrapper>
      </Container>
    );
  }

  return (
    <Container>
      <DeleteProduct onClick={() => onAddOrDeleteFromWishlist(product.id)}>
        <img src={closeModalIcon} alt="delete icon" />
      </DeleteProduct>
      <StyledLink to={`/brands/${product.brandPath}/name=${product.path}`}>
        <ProductImage>
          <img src={product.mainImg} alt="product" />
        </ProductImage>
      </StyledLink>
      <ProductName>
        {reduceTitleLength(transformProductName(product.name), 20)}
      </ProductName>
      <ProductDescription>
        {reduceTitleLength(product.description, 185)}
      </ProductDescription>
    </Container>
  );
};

export default Product;
