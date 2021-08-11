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
import { MyBag as MyBagProducts } from 'views/Checkout/consts';

const Bag = () => {
  const history = useHistory();
  const myBag = MyBagProducts;
  const [isErrorMessage, setErrorMessage] = useState(false);

  const onGoToCheckout = () => {
    if (myBag.length > 0) {
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
              My Bag (<span>{myBag.length}</span>)
            </span>
          </Title>
          <Products>
            {myBag.length > 0 ? (
              myBag.map((product) => {
                return <Product product={product} key={product.id} />;
              })
            ) : (
              <EmptyBag>
                <span>Your bag is empty ! Please add a product first.</span>
              </EmptyBag>
            )}
          </Products>
        </MyBag>
        <Summary>
          <span>Summary</span>
          <Subtotal>
            <span>Subtotal</span>
            <span>120 BAM</span>
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
