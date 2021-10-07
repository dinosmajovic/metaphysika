import ProductOptions from './ProductOptions';
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
import transformProductName from 'constants/transformProductName';
import { useEffect, useState } from 'react';
import findItemIndex from 'constants/findItemIndex/index';
import calculatePercentageDecrease from 'constants/calculatePrecentage/index';
import { addProduct } from 'state/bag';
import { useDispatch, useSelector } from 'react-redux';
import likeHeartOutlined from 'assets/icons/likeHeart/likeHeartOutlined.svg';
import likeHeartFilled from 'assets/icons/likeHeart/likeHeartFilled.svg';
import { addOrDeleteFromWishlist } from 'state/wishlist';

const ProductInformations = ({
  product,
  options,
  setOptions,
  isInWishlist,
  setIsInWishlist
}) => {
  const [sizeIsClicked, setSizeIsClicked] = useState(false);
  const [isButtonErrorMessage, setIsButtonErrorMessage] = useState(false);
  const [isInputErrorMessage, setIsInputErrorMessage] = useState(false);
  const [isQuantityErrorMessage, setIsQuantityErrorMessage] = useState(false);
  const dispatch = useDispatch();
  const bag = useSelector((state) => state.bag);
  const [isAddedToBag, setIsAddedToBag] = useState(false);
  const { token, isAuthenticated } = useSelector((state) => state.user);
  const { isError, actionType, errorMessage } = useSelector(
    (state) => state.wishlist
  );

  useEffect(() => {
    if (actionType === 'ADDED TO WISHLIST') {
      setIsInWishlist(true);
    } else if (actionType === 'REMOVED FROM WISHLIST') {
      setIsInWishlist(false);
    }
  }, [actionType]);

  const onAddToBag = () => {
    if (sizeIsClicked) {
      const currentProduct = { ...product };
      currentProduct.size = options[0].value;
      currentProduct.quantity = options[1].value;
      currentProduct.bagId = new Date().getTime() / 1000;

      const bagProducts = bag.products;

      // // checks if product already exist in the bag
      const productInBag = bagProducts.filter((product) => {
        return (
          product.id == currentProduct.id && product.size == currentProduct.size
        );
      });

      if (productInBag.length < 1) {
        // add product to the bag
        dispatch(addProduct(currentProduct));
        setIsAddedToBag(true);
        setTimeout(() => {
          setIsAddedToBag(false);
        }, 2000);
      } else {
        const clickedSize = product.sizes.filter((size) => {
          return size.name === currentProduct.size;
        });

        // RETURNS STOCK NUMBER OF SELECTED VARIANT
        const clickedSizeStock = clickedSize[0].stock;

        // // RETURNS STOCK NUMBER OF SELECTED PRODUCT IN BAG
        const alreadyAddedQuantity = productInBag
          .map((product) => {
            return parseInt(product.quantity);
          })
          .reduce((a, b) => a + b, 0);

        // // RETURNS SELECTED STOCK NUMBER OF VARIANT

        const currentQuantity = currentProduct.quantity;

        if (clickedSizeStock >= alreadyAddedQuantity + currentQuantity) {
          // ADDS PRODUCT INTO THE BAG
          dispatch(addProduct(currentProduct));
          setIsAddedToBag(true);
          setTimeout(() => {
            setIsAddedToBag(false);
          }, 2000);
        } else {
          // THROWS AN ERROR
          setIsQuantityErrorMessage(true);
        }
      }
    } else {
      setIsButtonErrorMessage(true);
    }
    // dispatch(calculateSubtotal());
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
        sizeStockList.push(i.toString());
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
    dispatch(addOrDeleteFromWishlist({ isAuthenticated, token, productId }));
  };

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

          <Button onClick={onAddToBag}>
            {isAddedToBag
              ? 'ADDED TO BAG'
              : isQuantityErrorMessage
              ? 'NOT AVAILABLE'
              : 'ADD TO BAG'}
          </Button>

          <LikeWrapper onClick={() => onAddOrDeleteFromWishlist(product.id)}>
            {isInWishlist ? (
              <img src={likeHeartFilled} alt="Heart icon" />
            ) : (
              <img src={likeHeartOutlined} alt="Heart icon" />
            )}
          </LikeWrapper>
        </ButtonWrapper>
        {isError && <WishlistError>{errorMessage.description}</WishlistError>}
      </Buttons>
    </ProductInfo>
  );
};

export default ProductInformations;
