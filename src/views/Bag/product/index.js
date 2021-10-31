import { Container, ProductWrapper, ProductImage } from './styled';
import ProductInfo from './ProductInfo';
import { Link } from 'react-router-dom';
import { deleteProduct } from 'state/bag';
import { useDispatch } from 'react-redux';

const Product = ({ product }) => {
  const options = [
    {
      label: 'Size',
      value: `${product.size}`,
      values: [],
      isOpened: false
    },
    {
      label: 'Quantity',
      value: `${product.quantity}`,
      values: [],
      isOpened: false
    }
  ];

  const dispatch = useDispatch();

  const onProductDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <Container>
      <ProductWrapper>
        <Link to={product.pathToProduct}>
          <ProductImage>
            <img src={product.mainImg} alt="product" />
          </ProductImage>
        </Link>
        <ProductInfo
          options={options}
          product={product}
          onProductDelete={onProductDelete}
        />
      </ProductWrapper>
    </Container>
  );
};

export default Product;
