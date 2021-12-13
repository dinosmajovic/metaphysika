import CheckoutLayout from '../CheckoutLayout';
import { useHistory } from 'react-router-dom';
import Button from 'components/atoms/Button';
import {
  Title,
  Buttons,
  Container,
  OfflinePayment,
  OnlinePayment,
  PaymentMethods
} from './styled';
import checkmark from 'assets/icons/checkmark.svg';
import { useState } from 'react';
import CheckBox from 'components/atoms/CheckBox';
import { useSelector, useDispatch } from 'react-redux';
import { closeError, setIsPaymentStep, onPurchase } from 'state/checkout';
import Loader from 'components/atoms/Loader/index';
import { Redirect } from 'react-router';
import { LoaderWrapper } from 'components/atoms/Loader/styledWrapper';
import ErrorMessage from 'components/atoms/ErrorMessage';

const Payment = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOnlinePayment, setIsOnlinePayment] = useState(false);

  const {
    billingInfo,
    shippingInfo,
    isPaymentStep,
    isLoading,
    isError,
    errorMessage,
    isPaymentSuccessfulStep
  } = useSelector((state) => state.checkout);

  const { products, deliveryPrice, subtotal, total } = useSelector(
    (state) => state.bag
  );
  const { token } = useSelector((state) => state.user);

  const onOfflinePayment = () => {
    setIsOnlinePayment(false);
  };

  const onOnlinePayment = () => {
    setIsOnlinePayment(true);
  };

  const onCloseError = () => {
    dispatch(closeError());
  };

  const makePurchase = () => {
    dispatch(
      onPurchase({
        isOnlinePayment,
        token,
        billingInfo,
        shippingInfo,
        bagProducts: products
      })
    );
  };

  const onGoBack = () => {
    dispatch(setIsPaymentStep({ isPaymentStep: false, shippingInfo: null }));
    history.push('/checkout/shipping');
  };

  if (products.length < 1) {
    dispatch(setIsPaymentStep({ isPaymentStep: false }));
  }

  if (isLoading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }

  if (isPaymentStep) {
    return (
      <CheckoutLayout
        type={'total'}
        totalPrice={total}
        subtotalPrice={subtotal}
        deliveryPrice={deliveryPrice}
      >
        <Container>
          <PaymentMethods>
            <Title>Payment methods</Title>
            {isError && (
              <ErrorMessage
                errorTitle={errorMessage.title}
                errorDescription={errorMessage.description}
                onCloseError={onCloseError}
              />
            )}
            <OnlinePayment onClick={onOnlinePayment}>
              <CheckBox>
                {isOnlinePayment && <img src={checkmark} alt={'checkmark'} />}
              </CheckBox>
              <span>
                <span>Online Payment</span>
                <span>(COMING SOON)</span>
              </span>
            </OnlinePayment>

            <OfflinePayment onClick={onOfflinePayment}>
              <CheckBox>
                {!isOnlinePayment && <img src={checkmark} alt={'checkmark'} />}
              </CheckBox>
              <span>Offline Payment</span>
            </OfflinePayment>
          </PaymentMethods>
          <Buttons>
            <Button type="white" onClick={onGoBack}>
              Back
            </Button>
            <Button
              onClick={() => {
                makePurchase();
              }}
            >
              Buy
            </Button>
          </Buttons>
        </Container>
      </CheckoutLayout>
    );
  }

  if (isPaymentSuccessfulStep) {
    return <Redirect to="/checkout/confirmation" />;
  }

  return <Redirect to="/bag" />;
};

export default Payment;
