import {
  Container,
  ProductWrapper,
  ProductImage,
  StyledLink,
  DeleteWrapper
} from './styled';
import ProductInfo from './ProductInfo';
import { deleteProduct } from 'state/bag';
import { useDispatch } from 'react-redux';
import xIcon from 'assets/icons/modalClose.svg';

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
      <DeleteWrapper onClick={() => onProductDelete(product.id)}>
        <img src={xIcon} alt="x icon" />
      </DeleteWrapper>
      <StyledLink to={product.pathToProduct}>
        <ProductWrapper>
          <ProductImage>
            <img src={product.mainImg} alt="product" />
          </ProductImage>
          <ProductInfo options={options} product={product} />
        </ProductWrapper>
      </StyledLink>
    </Container>
  );
};

export default Product;
