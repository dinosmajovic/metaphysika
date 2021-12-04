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
import { onOpenLogInModal } from 'state/modal';
import { errorPath } from 'constants/routes/index';
import shortenText from 'constants/reduceTitleLength';
import useWindowSize from 'hooks/useWindowSize';
import { API } from 'api';

const Product = ({ product, setIsLoading }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { token, isAuthenticated } = useSelector((state) => state.user);
  const { wishlistProducts, loadingProductId } = useSelector(
    (state) => state.wishlist
  );
  const [productIsInWishlist, setProductIsInWishlist] = useState(
    product?.isInWishlist
  );
  const windowWidth = useWindowSize().width;

  useEffect(() => {
    const isInWishlist =
      wishlistProducts?.filter((p) => {
        return p.id === product.id;
      }).length > 0;

    isInWishlist ? setProductIsInWishlist(true) : setProductIsInWishlist(false);
  }, [wishlistProducts, product.id]);

  const percentageDecrease = calculatePrecentage(
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
      if (productIsInWishlist) {
        dispatch(deleteFromWishlist({ productId, token }));
      } else {
        dispatch(addToWishlist({ productId, token }));
      }
    } else {
      dispatch(onOpenLogInModal());
    }
  };

  const onPushProduct = async (product, event) => {
    if (!event.target.className.includes('like')) {
      setIsLoading(true);

      const brandId = product.brandId;

      try {
        const { data } = await axios.get(API + '/getBrand', {
          params: {
            brandId
          }
        });

        const brandPath = data.path;

        history.push(`/brands/${brandPath}/name=${product.path}`);
      } catch (error) {
        history.push(errorPath);
      }
    }
  };

  return (
    <ProductContainer>
      <PictureContainer>
        {product?.oldPrice && (
          <Percentage>
            <span>{percentageDecrease}%</span>
          </Percentage>
        )}

        <Picture onClick={(event) => onPushProduct(product, event)}>
          <Heart
            className="like"
            onClick={() => {
              onAddOrDeleteFromWishlist(product.id);
            }}
          >
            {loadingProductId === product.id ? (
              <Loader size={25} />
            ) : productIsInWishlist ? (
              <img src={likeHeartFilled} alt="Heart icon" className="like" />
            ) : (
              <img src={likeHeartOutlined} alt="Heart icon" className="like" />
            )}
          </Heart>

          <img src={product.mainImg} alt="Product" />
        </Picture>
      </PictureContainer>
      <Label>
        {shortenText(
          transformProductName(product.name),
          windowWidth > 600 ? 20 : 17
        )}
      </Label>
      <PriceContainer>
        {product?.oldPrice && <OldPrice>{`${product?.oldPrice} BAM`}</OldPrice>}
        <Price>{`${product?.price} BAM`}</Price>
      </PriceContainer>
    </ProductContainer>
  );
};

export default Product;
