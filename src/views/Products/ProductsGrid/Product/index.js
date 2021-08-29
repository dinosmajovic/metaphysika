import {
  ProductContainer,
  Picture,
  Heart,
  Label,
  PictureContainer,
  PriceContainer,
  OldPrice,
  Price,
  Percentage,
  StyledLink
} from './styled';
import likeHeartOutlined from 'assets/icons/likeHeart/likeHeartOutlined.svg';
import likeHeartFilled from 'assets/icons/likeHeart/likeHeartFilled.svg';
import calculatePrecentage from 'constants/calculatePrecentage';
import transformProductName from 'constants/transformProductName';
import { addOrDeleteFromWishlist } from 'state/wishlist';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const onAddOrDeleteFromWishlist = (product) => {
    dispatch(addOrDeleteFromWishlist(product));
  };

  const precentageDecrease = calculatePrecentage(
    product.price,
    product.oldPrice
  );

  const wishlistProducts = useSelector((state) => state.wishlist.products);

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
    <ProductContainer>
      <PictureContainer>
        <Heart
          onClick={() => {
            onAddOrDeleteFromWishlist(product);
          }}
        >
          {productIsInWishlist ? (
            <img src={likeHeartFilled} alt="Heart icon" />
          ) : (
            <img src={likeHeartOutlined} alt="Heart icon" />
          )}
        </Heart>
        {product?.oldPrice && (
          <Percentage>
            <span>{precentageDecrease}%</span>
          </Percentage>
        )}
        <StyledLink to={`${product.brandPath}${product.path}`}>
          <Picture>
            <img src={product.mainImg} alt="Product" />
          </Picture>
        </StyledLink>
      </PictureContainer>
      <Label>{transformProductName(product?.name)}</Label>
      <PriceContainer>
        {product?.oldPrice && (
          <OldPrice>{`${product?.oldPrice} ${product?.currencyCode}`}</OldPrice>
        )}
        <Price>{`${product?.price} ${product?.currencyCode}`}</Price>
      </PriceContainer>
    </ProductContainer>
  );
};

export default Product;
