import Button from 'components/atoms/Button';
import Product from './Product';
import {
  ArrowUp,
  ArrowHoverWrapper,
  Title,
  Products,
  SubTotal,
  Buttons,
  StyledLink,
  ErrorMessage
} from './styled';

import { checkoutPath, bagPath } from 'constants/routes';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const MyBagList = () => {
  const { products, subtotal } = useSelector((state) => state.bag);
  const [isErrorMessage, setIsErrorMessage] = useState(false);
  const history = useHistory();

  const goToCheckout = () => {
    if (products.length > 0) {
      history.push(checkoutPath);
    } else {
      setIsErrorMessage(true);
      setTimeout(() => {
        setIsErrorMessage(false);
      }, 4000);
    }
  };

  return (
    <>
      <ArrowHoverWrapper />
      <ArrowUp />
      <Title>
        <span>
          My Bag (<span>{products?.length}</span>)
        </span>
      </Title>
      <Products>
        {products.map((product) => (
          <Product key={product.bagId} product={product} />
        ))}
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
        <Button size="small" type="pink" onClick={goToCheckout}>
          CHECKOUT
        </Button>
        {isErrorMessage && <ErrorMessage>Add a product first</ErrorMessage>}
      </Buttons>
    </>
  );
};

export default MyBagList;
