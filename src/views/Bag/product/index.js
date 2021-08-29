import xIcon from 'assets/icons/modalClose.svg';
import { useState } from 'react';
import {
  Container,
  DeleteWrapper,
  ProductWrapper,
  ProductImage
} from './styled';
import ProductInfo from './ProductInfo';
import { Link } from 'react-router-dom';
import { deleteProduct, calculateSubtotal } from 'state/bag';
import { useDispatch } from 'react-redux';

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

  const dispatch = useDispatch();

  const onProductDelete = (bagId) => {
    dispatch(deleteProduct(bagId));
    dispatch(calculateSubtotal());
  };

  return (
    <Container>
      <DeleteWrapper onClick={() => onProductDelete(product.bagId)}>
        <img src={xIcon} alt="x icon" />
      </DeleteWrapper>
      <ProductWrapper>
        <Link to={product.productPath}>
          <ProductImage>
            <img src={product.mainImg} alt="Product"></img>
          </ProductImage>
        </Link>
        <ProductInfo
          options={options}
          product={product}
          // onInputClick={onInputClick}
          // onValueClick={onValueClick}
        />
      </ProductWrapper>
    </Container>
  );
};

export default Product;

// const onInputClick = (optionLabel) => {
//   const editedOptions = [...options];
//   const optionIndex = editedOptions.findIndex((option) => {
//     return option.label === optionLabel;
//   });

//   editedOptions[optionIndex].isOpened = true;
//   setOptions(editedOptions);
// };

// const onValueClick = (value, optionLabel) => {
//   const editedOptions = [...options];

//   const optionIndex = editedOptions.findIndex((option) => {
//     return option.label === optionLabel;
//   });

//   editedOptions[optionIndex].value = value;
//   editedOptions[optionIndex].isOpened = false;

//   const quantityIndex = editedOptions.findIndex(
//     (option) => option.label === 'Quantity'
//   );
//   const sizeIndex = editedOptions.findIndex(
//     (option) => option.label === 'Size'
//   );

//   const bagProduct = {
//     ...product,
//     size: editedOptions[sizeIndex].value,
//     quantity: editedOptions[quantityIndex].value
//   };

//   setOptions(editedOptions);
// };

// const onCloseDropdown = (event) => {
//   const className = event.target.className;
//   if (!className.includes('dropdown')) {
//     const newOptions = options.map((option) => {
//       return {
//         ...option,
//         isOpened: false
//       };
//     });

//     setOptions(newOptions);
//   }
// };
