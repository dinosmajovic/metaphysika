import Button from 'components/atoms/Button';
import Product from './Product';
import {
  ArrowUp,
  ArrowHoverWrapper,
  Title,
  Products,
  SubTotal,
  Buttons,
  StyledLink
} from './styled';

import { checkoutPath, bagPath } from 'constants/routes';

const MyBagList = () => {
  return (
    <>
      <ArrowHoverWrapper />
      <ArrowUp />
      <Title>
        <span>
          My Bag (<span>5</span>)
        </span>
      </Title>
      <Products>
        <Product />
      </Products>
      <SubTotal>
        <span>Sub-total</span>
        <span>50 BAM</span>
      </SubTotal>
      <Buttons>
        <StyledLink to={bagPath}>
          <Button size="small" type="white">
            VIEW BAG
          </Button>
        </StyledLink>
        <StyledLink to={checkoutPath}>
          <Button size="small" type="pink">
            CHECKOUT
          </Button>
        </StyledLink>
      </Buttons>
    </>
  );
};

export default MyBagList;
