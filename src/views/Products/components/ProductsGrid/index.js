import Product from './Product';
import { ProductsContainer } from './styled';

const ProductsGrid = ({ products }) => {
  return (
    <ProductsContainer>
      {products?.map((product) => (
        <Product key={product.sku} product={product} />
      ))}
    </ProductsContainer>
  );
};

export default ProductsGrid;
