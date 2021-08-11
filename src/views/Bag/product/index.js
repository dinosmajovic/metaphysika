import xIcon from 'assets/icons/modalClose.svg';
import { useEffect, useState } from 'react';
import {
  Container,
  DeleteWrapper,
  ProductWrapper,
  ProductImage
} from './styled';
import ProductInfo from './ProductInfo';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const [options, setOptions] = useState([
    {
      label: 'Size',
      value: `${product.size}`,
      values: ['42', '43', '44'],
      isOpened: false
    },
    {
      label: 'Quantity',
      value: `${product.quantity}`,
      values: ['1', '2'],
      isOpened: false
    }
  ]);

  useEffect(() => {
    setProductSizes();
  }, []);

  const onInputClick = (optionLabel) => {
    const editedOptions = [...options];
    const optionIndex = editedOptions.findIndex((option) => {
      return option.label === optionLabel;
    });

    editedOptions[optionIndex].isOpened = true;
    setOptions(editedOptions);
  };

  const onValueClick = (value, optionLabel) => {
    const editedOptions = [...options];

    const optionIndex = editedOptions.findIndex((option) => {
      return option.label === optionLabel;
    });

    editedOptions[optionIndex].value = value;
    editedOptions[optionIndex].isOpened = false;

    const quantityIndex = editedOptions.findIndex(
      (option) => option.label === 'Quantity'
    );
    const sizeIndex = editedOptions.findIndex(
      (option) => option.label === 'Size'
    );

    const bagProduct = {
      ...product,
      size: editedOptions[sizeIndex].value,
      quantity: editedOptions[quantityIndex].value
    };

    setOptions(editedOptions);
  };

  const onProductDelete = (id) => {
    console.log(`delete product${id}`);
  };

  const onCloseDropdown = (event) => {
    const className = event.target.className;

    if (!className.includes('dropdown')) {
      console.log('close dropdown');
      const newOptions = options.map((option) => {
        return {
          ...option,
          isOpened: false
        };
      });

      setOptions(newOptions);
    }
  };

  const setProductSizes = () => {};

  const setProductQuantity = () => {};

  return (
    <Container onClick={(event) => onCloseDropdown(event)}>
      <DeleteWrapper onClick={() => onProductDelete(product.sku)}>
        <img src={xIcon} alt="x icon" />
      </DeleteWrapper>
      <ProductWrapper>
        <Link to={product.path}>
          <ProductImage>
            <img src={product.defaultImg} alt="Product image"></img>
          </ProductImage>
        </Link>
        <ProductInfo
          options={options}
          product={product}
          onInputClick={onInputClick}
          onValueClick={onValueClick}
        />
      </ProductWrapper>
    </Container>
  );
};

export default Product;
