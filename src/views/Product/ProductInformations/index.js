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
  LikeWrapper
} from './styled';
import transformProductName from 'constants/transformProductName';
import { useState } from 'react';
import findItemIndex from 'constants/findItemIndex/index';
import calculatePercentageDecrease from 'constants/calculatePrecentage/index';
import { addProduct, calculateSubtotal } from 'state/bag';
import { useDispatch, useSelector } from 'react-redux';
import likeHeartOutlined from 'assets/icons/likeHeart/likeHeartOutlined.svg';
import likeHeartFilled from 'assets/icons/likeHeart/likeHeartFilled.svg';
import { addOrDeleteFromWishlist } from 'state/wishlist';

const ProductInformations = ({ product, options, setOptions, variants }) => {
  const [sizeIsClicked, setSizeIsClicked] = useState(false);
  const [isButtonErrorMessage, setIsButtonErrorMessage] = useState(false);
  const [isInputErrorMessage, setIsInputErrorMessage] = useState(false);
  const [isQuantityErrorMessage, setIsQuantityErrorMessage] = useState(false);
  const dispatch = useDispatch();
  const bag = useSelector((state) => state.bag);
  const wishlistProducts = useSelector((state) => state.wishlist.products);

  const onAddToBag = () => {
    if (sizeIsClicked) {
      const currentProduct = { ...product };
      currentProduct.size = options[0].value;
      currentProduct.quantity = options[1].value;
      currentProduct.bagId = new Date().getTime() / 1000;

      const bagProducts = bag.products;

      // checks if product already exist in the bag
      const productInBag = bagProducts.filter((product) => {
        return (
          product.id == currentProduct.id && product.size == currentProduct.size
        );
      });

      if (productInBag.length < 1) {
        // add product to the bag
        dispatch(addProduct(currentProduct));
      } else {
        const selectedVariant = variants.filter((variant) => {
          return variant.size == currentProduct.size;
        });

        // RETURNS STOCK NUMBER OF SELECTED VARIANT
        const variantQuantity = selectedVariant[0].quantity;

        // RETURNS STOCK NUMBER IN BAG OF SELECTED VARIANT
        const alreadyAddedQuantity = productInBag
          .map((product) => {
            return parseInt(product.quantity);
          })
          .reduce((a, b) => a + b, 0);

        // RETURNS SELECTED STOCK NUMBER OF VARIANT
        const currentQuantity = parseInt(currentProduct.quantity);

        if (variantQuantity >= alreadyAddedQuantity + currentQuantity) {
          // ADDS PRODUCT INTO THE BAG
          dispatch(addProduct(currentProduct));
        } else {
          // THROWS AN ERROR
          setIsQuantityErrorMessage(true);
        }
      }
    } else {
      setIsButtonErrorMessage(true);
    }
    dispatch(calculateSubtotal());
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
      const selectedSize = variants.filter((variant) => {
        return variant.size === value;
      });

      const variantQuantity = selectedSize[0].quantity;
      const variantQuantityList = [];
      for (var i = 1; i <= variantQuantity; i++) {
        variantQuantityList.push(i.toString());
      }

      newOptions[1].values = variantQuantityList;
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

  const onAddOrDeleteFromWishlist = (product) => {
    dispatch(addOrDeleteFromWishlist(product));
  };

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
        {product.oldPrice && (
          <OldPrice>
            {product.oldPrice} {product.currencyCode}
          </OldPrice>
        )}
        <Price>
          {product.price} {product.currencyCode}
        </Price>
      </PriceContainer>

      <ProductOptions
        options={options}
        onDropDownInputClick={onDropDownInputClick}
        onOptionValueClick={onOptionValueClick}
        isInputErrorMessage={isInputErrorMessage}
      />
      <Description
        dangerouslySetInnerHTML={{ __html: product.description }}
      ></Description>
      <ButtonWrapper>
        {isButtonErrorMessage && (
          <InputError>Please select size first</InputError>
        )}

        <Button onClick={onAddToBag}>
          {isQuantityErrorMessage ? 'NOT AVAILABLE' : 'ADD TO BAG'}
        </Button>

        <LikeWrapper onClick={() => onAddOrDeleteFromWishlist(product)}>
          {productIsInWishlist ? (
            <img src={likeHeartFilled} alt="Heart icon" />
          ) : (
            <img src={likeHeartOutlined} alt="Heart icon" />
          )}
        </LikeWrapper>
      </ButtonWrapper>
    </ProductInfo>
  );
};

export default ProductInformations;
