import ProductOptions from './ProductOptions';
import {
  ProductInfo,
  ButtonWrapper,
  Button,
  InputError,
  Description,
  OldPrice,
  Percentage,
  PriceContainer,
  Price,
  ProductName
} from './styled';
import transformProductName from 'constants/transformProductName';
import { useState } from 'react';
import findItemIndex from 'constants/findItemIndex/index';
import calculatePrecentageDecrease from 'constants/calculatePrecentage/index';

const ProductInformations = ({ product, options, setOptions }) => {
  const [sizeIsClicked, setSizeIsClicked] = useState(false);
  const [isButtonErrorMessage, setIsButtonErrorMessage] = useState(false);
  const [isInputErrorMessage, setIsInputErrorMessage] = useState(false);

  const onAddToBag = () => {
    if (sizeIsClicked) {
      console.log(`add to bag ${product.name}`);
    } else {
      setIsButtonErrorMessage(true);
    }
  };

  const onDropDownInputClick = (option) => {
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
      newOptions[clickedOptionIndex].value = value;
      newOptions[clickedOptionIndex].isOpened = false;
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
        setIsInputErrorMessage(true);
      }
    }
  };
  return (
    <ProductInfo>
      <ProductName>
        <h1>{transformProductName(product.name)}</h1>
        {product.oldPrice && (
          <span>
            {calculatePrecentageDecrease(product.price, product.oldPrice)}% OFF!
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
      <Description>{product.description}</Description>
      <ButtonWrapper>
        {isButtonErrorMessage && (
          <InputError>Please select size first</InputError>
        )}
        <Button onClick={onAddToBag}>ADD TO BAG</Button>
      </ButtonWrapper>
    </ProductInfo>
  );
};

export default ProductInformations;
