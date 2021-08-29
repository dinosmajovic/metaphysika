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
  Billing,
  ErrorMessage
} from './styled';
import checkmark from 'assets/icons/checkmark.svg';
import { useState } from 'react';
import AddressForm from 'components/molecules/AddressForm';
import CheckBox from 'components/atoms/CheckBox';
import { useSelector, useDispatch } from 'react-redux';
import { setPayment } from 'state/payment';

const Payment = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOnlinePayment, setIsOnlinePayment] = useState(false);
  const [isErrorMessage, setIsErrorMessage] = useState(false);

  const paymentIsAccepted = useSelector(
    (state) => state.payment.paymentIsAccepted
  );
  const isPaymentStep = useSelector((state) => state.checkout.isPaymentStep);
  const totalPrice = useSelector((state) => state.bag.total);
  const deliveryPrice = useSelector((state) => state.bag.deliveryPrice);
  const subtotalPrice = useSelector((state) => state.bag.subtotal);

  const cardFormik = useFormik({
    initialValues: {
      cardNumber: '',
      cardName: '',
      expirationDate: '',
      cvv: ''
    },
    validationSchema: validation,
    onSubmit: (values) => {
      setIsErrorMessage(true);
    }
  });

  const onOfflinePayment = () => {
    setIsErrorMessage(false);
    setIsOnlinePayment(false);
  };

  const onOnlinePayment = () => {
    setIsOnlinePayment(true);
  };

  const onCloseError = () => {
    dispatch(setPayment(-1));
  };

  if (isPaymentStep) {
    return (
      <CheckoutLayout
        type={'total'}
        totalPrice={totalPrice}
        subtotalPrice={subtotalPrice}
        deliveryPrice={deliveryPrice}
      >
        <Container>
          <PaymentMethods>
            <Title>Payment methods</Title>

            <OnlinePayment onClick={onOnlinePayment}>
              <CheckBox>
                {isOnlinePayment && <img src={checkmark} alt={'checkmark'} />}
              </CheckBox>
              <span>
                <span>Online Payment</span>
                <span>(COMING SOON)</span>
              </span>
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
                  setIsErrorMessage(true);
                  // cardFormik.submitForm();
                  // addressFormik.submitForm();
                } else {
                  setIsErrorMessage(false);
                  // addressFormik.submitForm();
                }
              }}
            >
              Buy
            </Button>
            {isErrorMessage && (
              <ErrorMessage>ONLINE PAYMENT IS COMING SOON</ErrorMessage>
            )}
          </Buttons>
        </Container>
      </CheckoutLayout>
    );
  } else {
    return <div>{history.push('/checkout/shipping')}</div>;
  }
};

export default Payment;

// const addressFormik = useFormik({
//   initialValues: {
//     firstName: shippingAddress.firstName,
//     lastName: shippingAddress.lastName,
//     email: shippingAddress.email,
//     phoneNumber: shippingAddress.phoneNumber,
//     address: {
//       country: shippingAddress.address.country,
//       city: shippingAddress.address.city,
//       line1: shippingAddress.address.line1,
//       line2: shippingAddress.address.line2,
//       zipCode: shippingAddress.address.zipCode
//     }
//   },
//   validationSchema: addressvalidation,
//   onSubmit: (values) => {
//     history.push('/checkout/confirmation');
//     console.log(values);
//   }
// });

/* <Billing>
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
</Billing> */

// const onSetBillingAddress = () => {
//   setBillingAddressIsShipping(!billingAddressIsShipping);
// };

// const [billingAddressIsShipping, setBillingAddressIsShipping] =
// useState(true);
