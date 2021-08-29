import Product from './Product';
import { ProductsContainer, NoProductsContainer, Container } from './styled';

const ProductsGrid = ({ products }) => {
  if (products.length == 0) {
    return (
      <NoProductsContainer>
        <span>NO PRODUCTS FOUND</span>
      </NoProductsContainer>
    );
  } else {
    return (
      <Container>
        <ProductsContainer>
          {products?.map((product, i) => (
            <Product key={product.id + i} product={product} />
          ))}
        </ProductsContainer>
      </Container>
    );
  }
};

export default ProductsGrid;

// {products.length === 0 ? (
//   <div>no products found</div>
// ) : (
//   products?.map((product, i) => (
//     <Product key={product.id + i} product={product} />
//   ))
// )}

// return  ({
//   products.length === 0 ? (
//     <NoProductsContainer>

//     </NoProductsContainer>
//   ) : (
//     <ProductsContainer>

//     </ProductsContainer>
//   )
// })
