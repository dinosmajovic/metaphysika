import { Container, Title, Products } from './styled';
import Product from './Product';
import { WISHLIST } from './consts';

const Wishlist = () => {
  const products = WISHLIST;
  return (
    <Container>
      <Title>
        My Wishlist (<span>6</span>)
      </Title>

      <Products>
        {products.map((product) => (
          <Product product={product} />
        ))}
      </Products>
    </Container>
  );
};

export default Wishlist;
