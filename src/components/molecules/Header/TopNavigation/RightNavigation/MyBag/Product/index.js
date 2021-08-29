import transformProductName from 'constants/transformProductName';
import xIcon from 'assets/icons/modalClose.svg';

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
import { useDispatch, useSelector } from 'react-redux';
import { calculateSubtotal, deleteProduct } from 'state/bag';
import likeHeartOutlined from 'assets/icons/likeHeart/likeHeartOutlined.svg';
import likeHeartFilled from 'assets/icons/likeHeart/likeHeartFilled.svg';
import { addOrDeleteFromWishlist } from 'state/wishlist';
import reduceTitleLength from 'constants/reduceTitleLength';

const Product = ({ products, type }) => {
  const dispatch = useDispatch();

  const onProductDelete = (id) => {
    dispatch(deleteProduct(id));
    dispatch(calculateSubtotal());
  };

  const onAddOrDeleteFromWishlist = (product) => {
    dispatch(addOrDeleteFromWishlist(product));
  };

  const wishlistProducts = useSelector((state) => state.wishlist.products);

  return products.map((product) => {
    const productInWishlist = wishlistProducts.filter((p) => {
      return product.id === p.id;
    });

    let productIsInWishlist = false;
    if (productInWishlist.length > 0) {
      productIsInWishlist = true;
    } else {
      productIsInWishlist = false;
    }
    return (
      <Wrapper key={product.bagId}>
        <DeleteWrapper onClick={() => onProductDelete(product.bagId)}>
          <img src={xIcon} alt="x icon" />
        </DeleteWrapper>
        <ProductWrapper>
          <StyledLink to={product.productPath}>
            <ProductImage>
              <img src={product.mainImg} alt="product" />
            </ProductImage>
          </StyledLink>
          <ProductInfo type={type}>
            <ProductName>
              {reduceTitleLength(transformProductName(product.name), 20)}
            </ProductName>

            <ProductOptions>
              <span>Size: {product.size}</span>
              <span>Quantity: {product.quantity}</span>
            </ProductOptions>
            <ProductPrice>
              {product.price} {product.currencyCode}
            </ProductPrice>

            <LikeWrapper onClick={() => onAddOrDeleteFromWishlist(product)}>
              {productIsInWishlist ? (
                <img src={likeHeartFilled} alt="Heart icon" />
              ) : (
                <img src={likeHeartOutlined} alt="Heart icon" />
              )}
            </LikeWrapper>
          </ProductInfo>
        </ProductWrapper>
      </Wrapper>
    );
  });
};

export default Product;
