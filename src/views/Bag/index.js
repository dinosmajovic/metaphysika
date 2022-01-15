import {
  Container,
  MyBag,
  Title,
  Products,
  Summary,
  Subtotal,
  EmptyBag,
  Wrapper,
  ErrorMessage
} from './styled';
import Product from './product';
import Button from 'components/atoms/Button';
import { checkoutPath } from 'constants/routes';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Bag = () => {
  const history = useHistory();
  const bag = useSelector((state) => state.bag.products);
  const [isErrorMessage, setErrorMessage] = useState(false);
  const subTotal = useSelector((state) => state.bag.subtotal);

  const onGoToCheckout = () => {
    if (bag.length > 0) {
      history.push(checkoutPath);
    } else {
      setErrorMessage(true);
    }
  };

  return (
    <Wrapper>
      <Container>
        <MyBag>
          <Title>
            <span>
              My Bag (<span>{bag.length}</span>)
            </span>
          </Title>
          <Products>
            {bag.length > 0 ? (
              bag.map((product) => {
                return <Product product={product} key={product.bagId} />;
              })
            ) : (
              <EmptyBag>
                <span>Your bag is empty! Please add a product first.</span>
              </EmptyBag>
            )}
          </Products>
        </MyBag>
        <Summary>
          <span>Summary</span>
          <Subtotal>
            <span>Subtotal</span>
            <span>{subTotal} KM</span>
          </Subtotal>
          <Button size={'big'} type={'pink'} onClick={onGoToCheckout}>
            CHECKOUT
          </Button>
          {isErrorMessage && (
            <ErrorMessage>Please add a product first.</ErrorMessage>
          )}
        </Summary>
      </Container>
    </Wrapper>
  );
};

export default Bag;
