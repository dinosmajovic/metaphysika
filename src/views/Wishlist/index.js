import {
  Container,
  Title,
  Products,
  EmptyWishlistWrapper,
  ErroMessage,
  LoaderWrapper
} from './styled';
import Product from './Product';
import { useSelector } from 'react-redux';
import Loader from 'components/atoms/Loader/index';
import { Redirect } from 'react-router';

const Wishlist = () => {
  const { wishlistProducts, isError } = useSelector((state) => state.wishlist);
  const { isAuthenticated } = useSelector((state) => state.user);

  if (!isAuthenticated) {
    return <Redirect to="/?login=true" />;
  }

  if (wishlistProducts) {
    return (
      <Container>
        <Title>
          My Wishlist (<span>{wishlistProducts?.length}</span>)
        </Title>
        {isError && <ErroMessage>Error! Wishlist is not working.</ErroMessage>}
        <Products>
          {wishlistProducts?.length > 0 &&
            wishlistProducts.map((product) => {
              return (
                <Product isError={isError} product={product} key={product.id} />
              );
            })}
        </Products>
        {wishlistProducts?.length === 0 && (
          <EmptyWishlistWrapper>
            <span>Your wishlist is empty!</span>
          </EmptyWishlistWrapper>
        )}
      </Container>
    );
  }

  return (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  );
};

export default Wishlist;
