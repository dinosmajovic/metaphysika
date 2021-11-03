import styled from 'styled-components';
import Stepper from '../Stepper';
import OrderDetails from './OrderDetails';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  max-width: 1900px;

  > :first-child {
    margin-right: 150px;
  }

  @media (max-width: 1150px) {
    width: fit-content;
    flex-direction: column;

    > :first-child {
      margin-right: 0px;
    }
  }

  @media (max-width: 400px) {
    width: 100%;
    padding: 20px;
  }
`;

const CheckoutLayout = ({
  children,
  totalPrice,
  deliveryPrice,
  type,
  subtotalPrice
}) => {
  const { pathname } = useLocation();
  const bag = useSelector((state) => state.bag.products);

  const currentStep = pathname.split('/')[2];

  const steps = [
    {
      name: 'shipping',
      label: 'SHIPPING'
    },
    {
      name: 'payment',
      label: 'PAYMENT'
    },
    {
      name: 'confirmation',
      label: 'DONE'
    }
  ];

  return (
    <CheckoutContainer>
      <Stepper steps={steps} currentStep={currentStep} />
      <Container>
        {children}
        <OrderDetails
          subtotalPrice={subtotalPrice}
          totalPrice={totalPrice}
          deliveryPrice={deliveryPrice}
          products={bag}
          type={type}
        />
      </Container>
    </CheckoutContainer>
  );
};

export default CheckoutLayout;
