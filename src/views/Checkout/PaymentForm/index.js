import Button from 'components/atoms/Button/index';
import Loader from 'components/atoms/Loader/index';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import {
  setClientSecret,
  onSubmitPurchase,
  setIsIsPaymentFailedStep
} from 'state/checkout';
import styled from 'styled-components';
import { colors } from 'styles/index';

const { TOKEN } = process.env;

const Label = styled.label`
  color: ${colors.pink.primary};
  display: block;
  margin-bottom: 20px;
`;

const Form = styled.form`
  width: 1000px;
  margin: 0px auto;
  margin-top: 40px;

  @media (max-width: 1050px) {
    width: 500px;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 0px 20px;
  }
`;

const CardError = styled.span`
  font-size: 14px;
  color: red;
  display: block;
  margin-bottom: 10px;
`;

const PaymentForm = () => {
  const {
    clientSecret,
    billingInfo,
    shippingInfo,
    orderId,
    isPaymentSuccessfulStep,
    isPaymentFailedStep,
    couponName
  } = useSelector((state) => state.checkout);

  const { token } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.bag);

  const dispatch = useDispatch();
  const history = useHistory();
  const [isMounted, setIsMounted] = useState(false);

  const cardError = useRef(null);
  const paymentForm = useRef(null);
  const cardElement = useRef(null);

  useEffect(() => {
    if (!clientSecret) {
      history.push('/checkout/shipping');
    }
  }, [clientSecret, history]);

  useEffect(() => {
    return () => {
      dispatch(setClientSecret(null));
    };
  }, [dispatch]);

  useEffect(() => {
    if (cardElement.current) {
      setIsMounted(true);
    }
  }, [cardElement]);

  const monriInstance = window['Monri'];
  const monri = monriInstance(TOKEN);

  if (isPaymentSuccessfulStep) {
    return <Redirect to="/checkout/confirmation" />;
  }

  if (isPaymentFailedStep) {
    return <Redirect to="/checkout/failure" />;
  }

  if (clientSecret) {
    const components = monri.components({ clientSecret });

    const card = components.create('card', {
      style: {
        base: {
          fontFamily: 'Rubik-Regular'
        },
        invalid: {
          color: 'red'
        },
        complete: {
          color: `${colors.pink.primary}`
        },
        label: {
          base: {
            color: `${colors.pink.primary}`,
            textTransform: 'none'
          },
          invalid: {
            color: 'red'
          },
          complete: {
            color: '#4caf50'
          }
        },
        input: {
          base: {
            fontSize: '15px',
            color: `${colors.pink.primary}`
          }
        },
        rememberCardLabel: {
          base: {
            color: 'blue',
            textTransform: 'none'
          }
        }
      }
      // tokenizePanOffered: true,
      // tokenizePan: true
    });

    card.onChange((event) => {
      if (event.error) {
        const { message } = event.error;
        cardError.current.textContent = message;
      } else {
        cardError.current.textContent = '';
      }
    });

    const handleSubmit = async (event) => {
      event.preventDefault();

      const result = await monri.createToken(card);

      if (result.error) {
        //Inform the customer that there was an error.
        cardError.current.textContent = result.error.message;
      } else {
        const transactionParams = {
          address: `${shippingInfo.address.line1} ${shippingInfo.address.line2}`,
          fullName: `${shippingInfo.firstName} ${shippingInfo.lastName}`,
          city: `${shippingInfo.address.city}`,
          zip: `${shippingInfo.address.zipCode}`,
          phone: `${shippingInfo.phoneNumber}`,
          country: `${shippingInfo.address.country}`,
          email: `${shippingInfo.email}`,
          orderInfo: `${orderId}`
        };

        monri.confirmPayment(card, transactionParams).then(function (result) {
          if (result.error) {
            // Inform the customer that there was an error.
            cardError.current.textContent = result.error.message;
          } else {
            const paymentResult = result.result;

            if (paymentResult.status === 'approved') {
              dispatch(
                onSubmitPurchase({
                  token,
                  shippingInfo,
                  billingInfo,
                  bagProducts: products,
                  orderId,
                  couponName
                })
              );
            } else {
              dispatch(
                setIsIsPaymentFailedStep(paymentResult.response_message)
              );
            }
          }
        });
      }
    };

    return (
      <Form
        onSubmit={(event) => handleSubmit(event)}
        action=""
        method="post"
        id="payment-form"
        ref={paymentForm}
      >
        <div className="form-row">
          <Label label htmlFor="card-element">
            Credit or debit card
          </Label>
          <div ref={cardElement} id="card-element">
            {isMounted ? card.mount('card-element') : <Loader />}
          </div>

          <CardError ref={cardError} id="card-errors" role="alert"></CardError>
        </div>
        <Button>Submit Payment</Button>
      </Form>
    );
  }

  return null;
};

export default PaymentForm;
