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

const MyWishlist = ({ isOpened, menuIsOpened, menuIsClosed }) => {
  return (
    <>
      <ArrowHoverWrapper />
      <ArrowUp />

      <Title>
        <span>
          My Wishlist (<span>{5}</span>)
        </span>
      </Title>
      <Products>
        <Product />
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
