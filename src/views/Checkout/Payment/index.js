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
import { useEffect, useState } from 'react';
import CheckBox from 'components/atoms/CheckBox';
import { useSelector, useDispatch } from 'react-redux';
import { closeError, setIsPaymentStep, onPurchase } from 'state/checkout';
import Loader from 'components/atoms/Loader/index';
import { Redirect } from 'react-router';
import { LoaderWrapper } from 'components/atoms/Loader/styledWrapper';
import ErrorMessage from 'components/atoms/ErrorMessage';
import mc_logo from 'assets/images/logos/mc_small.png';
import ms_logo from 'assets/images/logos/ms_small.png';
import visa_logo from 'assets/images/logos/visa_small.gif';
import diners_small from 'assets/images/logos/diners_small.gif';
import discover_small from 'assets/images/logos/discover_small.gif';

const Payment = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOnlinePayment, setIsOnlinePayment] = useState(true);

  const {
    billingInfo,
    shippingInfo,
    isPaymentStep,
    isLoading,
    isError,
    errorMessage,
    isPaymentSuccessfulStep,
    clientSecret
  } = useSelector((state) => state.checkout);

  useEffect(() => {
    if (clientSecret) {
      history.push('/checkout/form');
    }
  }, [clientSecret, history]);

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
              <div>
                <CheckBox>
                  {isOnlinePayment && <img src={checkmark} alt={'checkmark'} />}
                </CheckBox>
                <span>Pay by card</span>
              </div>

              {isOnlinePayment && (
                <div>
                  <img src={mc_logo} alt="mastercard" />
                  <img src={ms_logo} alt="maestro" />
                  <img src={visa_logo} alt="visa" />
                  <img src={diners_small} alt="diners" />
                  <img src={discover_small} alt="discover" />
                </div>
              )}
            </OnlinePayment>

            <OfflinePayment onClick={onOfflinePayment}>
              <CheckBox>
                {!isOnlinePayment && <img src={checkmark} alt={'checkmark'} />}
              </CheckBox>
              <span>Cash on delivery</span>
            </OfflinePayment>
          </PaymentMethods>
          <Buttons>
            <Button type="white" onClick={onGoBack}>
              Back
            </Button>
            <Button onClick={makePurchase}>
              {isOnlinePayment ? 'Next' : 'Submit Payment'}
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
