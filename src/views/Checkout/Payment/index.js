import CheckoutLayout from '../CheckoutLayout';
import { useHistory } from 'react-router-dom';
import Button from 'components/atoms/Button';
import Card from './Card';
import { useFormik } from 'formik';
import validation from './validation';
import addressvalidation from './addressvalidation';
import {
  Title,
  BillingCheckbox,
  Buttons,
  Container,
  OfflinePayment,
  OnlinePayment,
  PaymentMethods,
  Billing
} from './styled';
import checkmark from 'assets/icons/checkmark.svg';
import { useState } from 'react';
import AddressForm from 'components/molecules/AddressForm';
import CheckBox from 'components/atoms/CheckBox';
import ErrorMessage from 'components/atoms/ErrorMessage/index';
import { useSelector, useDispatch } from 'react-redux';
import { setPayment } from 'state/payment';

const Payment = () => {
  const dispatch = useDispatch();
  const paymentIsAccepted = useSelector(
    (state) => state.payment.paymentIsAccepted
  );
  const history = useHistory();
  const [isOnlinePayment, setIsOnlinePayment] = useState(true);
  const shippingAddress = JSON.parse(
    window.localStorage.getItem('shippingAddress')
  );

  const cardFormik = useFormik({
    initialValues: {
      cardNumber: '',
      cardName: '',
      expirationDate: '',
      cvv: ''
    },
    validationSchema: validation,
    onSubmit: (values) => {
      history.push('/checkout/confirmation');
      console.log(values);
    }
  });

  const addressFormik = useFormik({
    initialValues: {
      firstName: shippingAddress.firstName,
      lastName: shippingAddress.lastName,
      email: shippingAddress.email,
      phoneNumber: shippingAddress.phoneNumber,
      address: {
        country: shippingAddress.address.country,
        city: shippingAddress.address.city,
        line1: shippingAddress.address.line1,
        line2: shippingAddress.address.line2,
        zipCode: shippingAddress.address.zipCode
      }
    },
    validationSchema: addressvalidation,
    onSubmit: (values) => {
      history.push('/checkout/confirmation');
      console.log(values);
    }
  });

  const [billingAddressIsShipping, setBillingAddressIsShipping] =
    useState(true);

  const onSetBillingAddress = () => {
    setBillingAddressIsShipping(!billingAddressIsShipping);
  };

  const onOfflinePayment = () => {
    setIsOnlinePayment(false);
  };

  const onOnlinePayment = () => {
    setIsOnlinePayment(true);
  };

  const onCloseError = () => {
    dispatch(setPayment(-1));
  };

  return (
    <CheckoutLayout>
      <Container>
        <Billing>
          <Title>Billing Address</Title>
          <BillingCheckbox onClick={onSetBillingAddress}>
            <CheckBox>
              {billingAddressIsShipping && (
                <img src={checkmark} alt={'checkmark'} />
              )}
            </CheckBox>
            <span>Same as shipping address</span>
          </BillingCheckbox>
          {!billingAddressIsShipping && <AddressForm formik={addressFormik} />}
        </Billing>
        <PaymentMethods>
          <Title>Payment methods</Title>

          <OnlinePayment onClick={onOnlinePayment}>
            <CheckBox>
              {isOnlinePayment && <img src={checkmark} alt={'checkmark'} />}
            </CheckBox>
            <span>Online Payment</span>
          </OnlinePayment>

          {paymentIsAccepted === false ? (
            <ErrorMessage
              errorTitle="Payment failed"
              errorDescription="Please try again. If you continue to have issues, try another payment method."
              onCloseError={onCloseError}
            />
          ) : null}

          {isOnlinePayment && <Card formik={cardFormik} />}

          <OfflinePayment onClick={onOfflinePayment}>
            <CheckBox>
              {!isOnlinePayment && <img src={checkmark} alt={'checkmark'} />}
            </CheckBox>
            <span>Offline Payment</span>
          </OfflinePayment>
        </PaymentMethods>

        <Buttons>
          <Button
            type="white"
            onClick={() => history.push('/checkout/shipping')}
          >
            Back
          </Button>
          <Button
            onClick={() => {
              if (isOnlinePayment) {
                cardFormik.submitForm();
                addressFormik.submitForm();
              } else {
                addressFormik.submitForm();
              }
            }}
          >
            Next
          </Button>
        </Buttons>
      </Container>
    </CheckoutLayout>
  );
};

export default Payment;
