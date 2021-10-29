import {
  Container,
  Title,
  Products,
  EmptyWishlistWrapper,
  ErrorMessage,
  LoaderWrapper
} from './styled';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/atoms/Loader/index';
import { onOpenLogInModal } from 'state/modal';

const Wishlist = () => {
  const { wishlistProducts, isError } = useSelector((state) => state.wishlist);
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  if (!isAuthenticated) {
    dispatch(onOpenLogInModal());
  }

  if (wishlistProducts) {
    return (
      <Container>
        <Title>
          My Wishlist (<span>{wishlistProducts?.length}</span>)
        </Title>
        {isError && (
          <ErrorMessage>Error! Wishlist is not working.</ErrorMessage>
        )}
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
