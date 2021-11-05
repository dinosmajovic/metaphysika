import transformProductName from 'constants/transformProductName';
import deleteIcon from 'assets/icons/modalClose.svg';
import { deleteFromWishlist } from 'state/wishlist';
import {
  Wrapper,
  ProductWrapper,
  ProductImage,
  ProductInfo,
  ProductName,
  DeleteWrapper,
  ProductPrice,
  ProductDescription,
  StyledLink
} from './styled';
import shortenText from 'constants/reduceTitleLength';
import { useDispatch, useSelector } from 'react-redux';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);

  const onAddOrDeleteFromWishlist = (productId) => {
    dispatch(deleteFromWishlist({ productId, token }));
  };

  return (
    <Wrapper>
      <DeleteWrapper onClick={() => onAddOrDeleteFromWishlist(product.id)}>
        <img src={deleteIcon} alt="delete from wishlist" />
      </DeleteWrapper>
      <StyledLink to={`/brands/${product.brand.path}/name=${product.path}`}>
        <ProductWrapper>
          <ProductImage>
            <img src={product.mainImg} alt="product" />
          </ProductImage>

          <ProductInfo>
            <ProductName>
              {shortenText(transformProductName(product.name), 14)}
            </ProductName>
            <ProductDescription>
              {shortenText(product.description, 40)}
            </ProductDescription>
            <ProductPrice>{product.price} KM</ProductPrice>
          </ProductInfo>
        </ProductWrapper>
      </StyledLink>
    </Wrapper>
  );
};

export default Product;
