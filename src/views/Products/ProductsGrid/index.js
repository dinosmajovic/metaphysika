import { useSelector } from 'react-redux';
import Product from './Product';
import {
  ProductsContainer,
  NoProductsContainer,
  Container,
  WishlistError
} from './styled';

const ProductsGrid = ({ products, setLoading }) => {
  const { isError } = useSelector((state) => state.wishlist);

  <span>cannot add to the wishlist</span>;
  if (products.length == 0) {
    return (
      <NoProductsContainer>
        <span>NO PRODUCTS FOUND</span>
      </NoProductsContainer>
    );
  } else {
    return (
      <Container>
        {isError && (
          <WishlistError>Error! Wishlist is not working.</WishlistError>
        )}
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
