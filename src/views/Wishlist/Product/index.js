import {
  Container,
  ProductImage,
  ProductDescription,
  ProductName,
  DeleteProduct
} from './styled';
import closeModalIcon from 'assets/icons/modalClose.svg';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <Container>
      <DeleteProduct>
        <img src={closeModalIcon} alt="delete icon" />
      </DeleteProduct>
      <Link to={product.path}>
        <ProductImage>
          <img src={product.defaultImg} alt="product" />
        </ProductImage>
      </Link>
      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.description}</ProductDescription>
    </Container>
  );
};

export default Product;
