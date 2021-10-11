import Button from 'components/atoms/Button';
import Product from './Product';
import { myWishlistPath } from 'constants/routes';
import { Redirect } from 'react-router';
import Loader from 'components/atoms/Loader';
import {
  ArrowUp,
  ArrowHoverWrapper,
  Title,
  Products,
  Buttons,
  StyledLink,
  LoaderWrapper
} from './styled';
import { errorPath } from 'constants/routes/index';
import { useSelector, useDispatch } from 'react-redux';
import { getWishlist } from 'state/wishlist';
import { useEffect } from 'react';

const MyWishlist = () => {
  const dispatch = useDispatch();
  const { wishlistProducts, isLoading, isError } = useSelector(
    (state) => state.wishlist
  );
  const { isInitialized } = useSelector((state) => state.app);
  const { token, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated && isInitialized) {
      dispatch(getWishlist({ token }));
    }
  }, [isAuthenticated, isInitialized, token, dispatch]);

  if (!isAuthenticated) {
    return (
      <LoaderWrapper>
        <span>Log in to use wishlist</span>
      </LoaderWrapper>
    );
  }

  if (isError) {
    return (
      <LoaderWrapper>
        <span>Error! Wishlist is not working.</span>
      </LoaderWrapper>
    );
  }

  if (isLoading) {
    return (
      <LoaderWrapper>
        <Loader size={35} />
      </LoaderWrapper>
    );
  }

  return (
    <>
      <ArrowHoverWrapper />
      <ArrowUp />
      <Title>
        <span>
          My Wishlist (<span>{wishlistProducts?.length}</span>)
        </span>
      </Title>
      <Products>
        {wishlistProducts?.map((product) => (
          <Product key={product.path} product={product} />
        ))}
      </Products>
      <Buttons>
        <StyledLink to={myWishlistPath}>
          <Button size="small" type="pink">
            VIEW WISHLIST
          </Button>
        </StyledLink>
      </Buttons>
    </>
  );
};

export default MyWishlist;
