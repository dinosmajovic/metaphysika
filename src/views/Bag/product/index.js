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
import { deleteProduct } from 'state/bag';
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

  const onProductDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <Container>
      <DeleteWrapper onClick={() => onProductDelete(product)}>
        <img src={xIcon} alt="x icon" />
      </DeleteWrapper>
      <ProductWrapper>
        <Link to={product.pathToProduct}>
          <ProductImage>
            <img src={product.mainImg} alt="Product"></img>
          </ProductImage>
        </Link>
        <ProductInfo options={options} product={product} />
      </ProductWrapper>
    </Container>
  );
};

export default Product;
