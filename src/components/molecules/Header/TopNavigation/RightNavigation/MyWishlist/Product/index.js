import transformProductName from 'constants/transformProductName';
import deleteIcon from 'assets/icons/modalClose.svg';
import { Link } from 'react-router-dom';
import { deleteFromWishlist } from 'state/wishlist';

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
      <ProductWrapper>
        <Link to={`/brands/${product.brand.path}/${product.path}`}>
          <ProductImage>
            <img src={product.mainImg} alt="product" />
          </ProductImage>
        </Link>
        <ProductInfo>
          <ProductName>
            {shortenText(transformProductName(product.name), 14)}
          </ProductName>
          <ProductDescription>
            {shortenText(product.description, 40)}
          </ProductDescription>
          <ProductPrice>{product.price}</ProductPrice>
        </ProductInfo>
      </ProductWrapper>
    </Wrapper>
  );
};

export default Product;
