import {
  ProductContainer,
  Picture,
  Heart,
  Label,
  PictureContainer,
  PriceContainer,
  OldPrice,
  Price,
  Percentage
} from './styled';
import likeHeartOutlined from 'assets/icons/likeHeart/likeHeartOutlined.svg';
import likeHeartFilled from 'assets/icons/likeHeart/likeHeartFilled.svg';
import calculatePrecentage from 'constants/calculatePrecentage';
import transformProductName from 'constants/transformProductName';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { addToWishlist, deleteFromWishlist } from 'state/wishlist';
import { useEffect, useState } from 'react';
import Loader from 'components/atoms/Loader/index';

const Product = ({ product, setLoading }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { token, isAuthenticated } = useSelector((state) => state.user);
  const { isLoading } = useSelector((state) => state.wishlist);
  const [isWishlistLoading, setIsWishlistLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setIsWishlistLoading(false);
    }
  }, [isLoading]);

  const precentageDecrease = calculatePrecentage(
    product.price,
    product.oldPrice
  );

  const sizes = product.sizeIds;

  const mappedSizes = [];

  for (var key in sizes) {
    mappedSizes.push(key);
  }

  const onAddOrDeleteFromWishlist = (productId) => {
    if (isAuthenticated) {
      if (product.isInWishlist) {
        setIsWishlistLoading(true);
        dispatch(deleteFromWishlist({ productId, token }));
        product.isInWishlist = false;
      } else {
        setIsWishlistLoading(true);
        dispatch(addToWishlist({ productId, token }));
        product.isInWishlist = true;
      }
    } else {
      history.push('/?login=true');
    }
  };

  const onPushProduct = async (product, event) => {
    if (!event.target.className.includes('like')) {
      setLoading(true);

      const brandId = product.brandId;

      try {
        const { data } = await axios.get('/getBrand', {
          params: {
            brandId
          }
        });

        const brandPath = data.path;

        history.push(`/brands/${brandPath}/${product.path}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <ProductContainer>
      <PictureContainer>
        {product?.oldPrice && (
          <Percentage>
            <span>{precentageDecrease}%</span>
          </Percentage>
        )}

        <Picture onClick={(event) => onPushProduct(product, event)}>
          <Heart
            className="like"
            onClick={() => {
              onAddOrDeleteFromWishlist(product.id);
            }}
          >
            {isWishlistLoading ? (
              <Loader size={25} />
            ) : product.isInWishlist ? (
              <img src={likeHeartFilled} alt="Heart icon" className="like" />
            ) : (
              <img src={likeHeartOutlined} alt="Heart icon" className="like" />
            )}
          </Heart>

          <img src={product.mainImg} alt="Product" />
        </Picture>
      </PictureContainer>
      <Label>{transformProductName(product?.name)}</Label>
      <PriceContainer>
        {product?.oldPrice && <OldPrice>{`${product?.oldPrice} BAM`}</OldPrice>}
        <Price>{`${product?.price} BAM`}</Price>
      </PriceContainer>
    </ProductContainer>
  );
};

export default Product;
