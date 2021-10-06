import Button from 'components/atoms/Button';
import Product from './Product';
import { myWishlistPath } from 'constants/routes';

import {
  ArrowUp,
  ArrowHoverWrapper,
  Title,
  Products,
  Buttons,
  StyledLink
} from './styled';
import { useSelector } from 'react-redux';

const MyWishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.products);

  return (
    <>
      {/* <ArrowHoverWrapper />
      <ArrowUp />
      <Title>
        <span>
          My Wishlist (<span>{wishlist.length}</span>)
        </span>
      </Title>
      <Products>
        {wishlist.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Products>

      <Buttons>
        <StyledLink to={myWishlistPath}>
          <Button size="small" type="pink">
            VIEW WISHLIST
          </Button>
        </StyledLink>
      </Buttons> */}
    </>
  );
};

export default MyWishlist;
