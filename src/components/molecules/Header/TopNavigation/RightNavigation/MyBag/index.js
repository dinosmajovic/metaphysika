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
import { useSelector } from 'react-redux';

const MyBagList = () => {
  const bag = useSelector((state) => state.bag.products);
  const subtotal = useSelector((state) => state.bag.subtotal);

  return (
    <>
      <ArrowHoverWrapper />
      <ArrowUp />
      <Title>
        <span>
          My Bag (<span>{bag.length}</span>)
        </span>
      </Title>
      <Products>
        <Product products={bag} />
      </Products>
      <SubTotal>
        <span>Sub-total</span>
        <span>{subtotal} BAM</span>
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
