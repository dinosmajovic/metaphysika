import Product from './Product';
import { ProductsContainer, NoProductsContainer, Container } from './styled';

const ProductsGrid = ({ products, setLoading }) => {
  <span>cannot add to the wishlist</span>;
  if (products.length === 0) {
    return (
      <NoProductsContainer>
        <span>NO PRODUCTS FOUND</span>
      </NoProductsContainer>
    );
  } else {
    return (
      <Container>
        <ProductsContainer>
          {products.map((product, i) => {
            return (
              <Product
                key={product.id + i}
                product={product}
                setLoading={setLoading}
              />
            );
          })}
        </ProductsContainer>
      </Container>
    );
  }
};

export default ProductsGrid;
