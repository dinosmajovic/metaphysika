import ProductOptions from './ProductOptions';
import uniqid from 'uniqid';
import transformProductName from 'constants/transformProductName';
import { useEffect, useState } from 'react';
import findItemIndex from 'constants/findItemIndex/index';
import calculatePercentageDecrease from 'constants/calculatePrecentage/index';
import { addProduct } from 'state/bag';
import { useDispatch, useSelector } from 'react-redux';
import likeHeartOutlined from 'assets/icons/likeHeart/likeHeartOutlined.svg';
import likeHeartFilled from 'assets/icons/likeHeart/likeHeartFilled.svg';
import { addToWishlist, deleteFromWishlist } from 'state/wishlist';
import { useHistory, useParams } from 'react-router';
import Loader from 'components/atoms/Loader/';
import {
  ProductInfo,
  ButtonWrapper,
  Button,
  InputError,
  Description,
  OldPrice,
  PriceContainer,
  Price,
  ProductName,
  LikeWrapper,
  Buttons,
  WishlistError
} from './styled';
import { setError } from 'state/bag';
import { onOpenLogInModal } from 'state/modal';

const ProductInformations = ({ product, options, setOptions }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [sizeIsClicked, setSizeIsClicked] = useState(false);
  const [isButtonErrorMessage, setIsButtonErrorMessage] = useState(false);
  const [isInputErrorMessage, setIsInputErrorMessage] = useState(false);
  const [isQuantityErrorMessage, setIsQuantityErrorMessage] = useState(false);
  const { token, isAuthenticated } = useSelector((state) => state.user);
  const { isError, isLoading } = useSelector((state) => state.wishlist);
  const [productIsInWishlist, setProductIsInWishlist] = useState(
    product.isInWishlist
  );
  const { error } = useSelector((state) => state.bag);
  const params = useParams();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(setError(false));
      }, 2000);
    }
  }, [error]);

  const onAddToBag = () => {
    if (sizeIsClicked) {
      const addedProduct = { ...product };
      addedProduct.size = options[0].value;
      addedProduct.quantity = options[1].value;
      addedProduct.bagId = uniqid();
      addedProduct.pathToProduct = `/brands/${params.brandName}/${params.productName}`;

      dispatch(addProduct(addedProduct));
    } else {
      setIsButtonErrorMessage(true);
    }
  };

  const onDropDownInputClick = (option) => {
    if (!sizeIsClicked && option === 'Quantity') {
      setIsInputErrorMessage(true);
    }

    const newOptions = [...options];
    const clickedOptionIndex = findItemIndex(newOptions, option);

    if (!newOptions[clickedOptionIndex].disabled) {
      newOptions[clickedOptionIndex].isOpened = true;
      setOptions(newOptions);
    }
  };

  const onOptionValueClick = (value, option) => {
    const newOptions = [...options];

    const clickedOptionIndex = findItemIndex(newOptions, option);

    if (option === 'Size') {
      const clickedSize = product.sizes.filter((p) => {
        return p.name === value;
      });

      const sizeStock = clickedSize[0].stock;

      const sizeStockList = [];
      for (var i = 1; i <= sizeStock; i++) {
        sizeStockList.push(i);
      }

      newOptions[1].values = sizeStockList;
      newOptions[clickedOptionIndex].value = value;
      newOptions[clickedOptionIndex].isOpened = false;
      newOptions[1].value = 1;
      setIsQuantityErrorMessage(false);
      setSizeIsClicked(true);
      setOptions(newOptions);
      setIsInputErrorMessage(false);
      setIsButtonErrorMessage(false);
    }

    if (option === 'Quantity') {
      if (sizeIsClicked) {
        newOptions[clickedOptionIndex].value = value;
        newOptions[clickedOptionIndex].isOpened = false;
        setOptions(newOptions);
      } else {
        newOptions[clickedOptionIndex].isOpened = false;
        setSizeIsClicked(false);
        setOptions(newOptions);
      }
    }
  };

  const onAddOrDeleteFromWishlist = (productId) => {
    if (isAuthenticated) {
      if (productIsInWishlist) {
        dispatch(deleteFromWishlist({ productId, token }));
        setProductIsInWishlist(false);
      } else {
        dispatch(addToWishlist({ productId, token }));
        setProductIsInWishlist(true);
      }
    } else {
      dispatch(onOpenLogInModal());
    }
  };

  let buttonName;

  if (error) {
    buttonName = error;
  } else {
    buttonName = 'ADD TO BAG';
  }

  return (
    <ProductInfo>
      <ProductName>
        <h1>{transformProductName(product.name)}</h1>
        {product.oldPrice && (
          <span>
            {calculatePercentageDecrease(product.price, product.oldPrice)}% OFF!
          </span>
        )}
      </ProductName>

      <PriceContainer>
        {product.oldPrice && <OldPrice>{product.oldPrice} BAM</OldPrice>}
        <Price>{product.price} BAM</Price>
      </PriceContainer>

      <ProductOptions
        options={options}
        onDropDownInputClick={onDropDownInputClick}
        onOptionValueClick={onOptionValueClick}
        isInputErrorMessage={isInputErrorMessage}
      />
      <Description>
        <p>{product.description}</p>
        <ul>
          {product.structure.map((structure) => (
            <li key={structure}>{structure}</li>
          ))}
        </ul>
      </Description>
      <Buttons>
        <ButtonWrapper>
          {isButtonErrorMessage && (
            <InputError>Please select size first</InputError>
          )}

          <Button onClick={onAddToBag}>{buttonName}</Button>

          <LikeWrapper onClick={() => onAddOrDeleteFromWishlist(product.id)}>
            {!isLoading ? (
              productIsInWishlist ? (
                <img src={likeHeartFilled} alt="Heart icon" />
              ) : (
                <img src={likeHeartOutlined} alt="Heart icon" />
              )
            ) : (
              <Loader size={35} />
            )}
          </LikeWrapper>
        </ButtonWrapper>
        {isError && (
          <WishlistError>Error! Wishlist is not working.</WishlistError>
        )}
      </Buttons>
    </ProductInfo>
  );
};

export default ProductInformations;
