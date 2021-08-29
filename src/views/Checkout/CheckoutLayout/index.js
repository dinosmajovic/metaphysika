import styled from 'styled-components';
import Stepper from '../Stepper';
import OrderDetails from './OrderDetails';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
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
