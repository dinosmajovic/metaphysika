import Button from 'components/atoms/Button';
import Product from './Product';

// import { useDispatch, useSelector } from 'react-redux';
// import { deleteFromBag, sumSubtotalPrice } from 'state/bag';
// import { resetBag } from 'state/header';

// import { bagPath } from 'constants/paths';
// import { checkoutPath } from 'constants/paths';
// import { useRouter } from 'next/router';

import {
  MyBag,
  ArrowUp,
  ArrowHoverWrapper,
  Title,
  Products,
  SubTotal,
  Buttons
} from './styled';

const MyBagList = ({ isOpened, menuIsOpened, menuIsClosed }) => {
  // const router = useRouter();
  // const dispatch = useDispatch();

  // const goToBag = () => {
  //   router.push(bagPath);
  // };

  // const goToCheckout = () => {
  //   router.push(checkoutPath);
  // };
  // const myBag = useSelector((state) => state.myBag.myBag);

  // const deleteProduct = (product) => {
  //   dispatch(deleteFromBag(product.id));
  //   dispatch(sumSubtotalPrice());
  //   dispatch(resetBag());
  // };

  // const subTotalSum = useSelector((state) => state.myBag.subTotal);

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
