import { Container, Title, Products } from './styled';
import Product from './Product';
import { useSelector } from 'react-redux';

const Wishlist = () => {
  const wishlistProducts = useSelector((state) => state.wishlist.products);

  return (
    <Container>
      wishlist
      {/* <Title>
        My Wishlist (<span>{wishlistProducts.length}</span>)
      </Title>

      <Products>
        {wishlistProducts.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </Products> */}
    </Container>
  );
};

export default Wishlist;
