import Product from './Product';
import { ProductsContainer, NoProductsContainer, Container } from './styled';

const ProductsGrid = ({ products, setIsLoading }) => {
  if (products?.length < 1) {
    return (
      <NoProductsContainer>
        <span>NO PRODUCTS FOUND</span>
      </NoProductsContainer>
    );
  }

  return (
    <Container>
      <ProductsContainer>
        {products?.map((product, i) => {
          return (
            <Product
              key={product.id + i}
              product={product}
              setIsLoading={setIsLoading}
            />
          );
        })}
      </ProductsContainer>
    </Container>
  );
};

export default ProductsGrid;
