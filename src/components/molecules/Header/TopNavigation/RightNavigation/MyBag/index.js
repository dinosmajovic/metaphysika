import Button from 'components/atoms/Button';
import Product from './Product';

import {
  ArrowUp,
  ArrowHoverWrapper,
  Title,
  Products,
  SubTotal,
  Buttons
} from './styled';

const MyBagList = ({ isOpened, menuIsOpened, menuIsClosed }) => {
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
        <Button size="small" type="white">
          VIEW BAG
        </Button>
        <Button size="small" type="pink">
          CHECKOUT
        </Button>
      </Buttons>
    </>
  );
};

export default MyBagList;
