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
import fonts from 'assets/fonts';
import Loader from 'components/atoms/Loader';

const { TOKEN } = process.env;
const monriInstance = window['Monri'];
const monri = monriInstance(TOKEN);

const style = {
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
};

const Button = styled.button`
  width: 115px;
  height: 30px;
  font-size: 12px;

  border-radius: 5px;
  cursor: pointer;
  font-weight: ${fonts.sfPro.fontWeight.semibold};
  border: ${({ type }) =>
    type === 'pink' ? 'none' : `1px solid ${colors.pink.primary}`};
  background-color: ${({ type }) =>
    type === 'pink' ? `${colors.pink.primary}` : `${colors.white.primary}`};
  color: ${({ type }) =>
    type === 'pink' ? `${colors.white.primary}` : `${colors.pink.primary}`};

  :active {
    background-color: ${({ type }) =>
      type === 'pink' ? `${colors.pink.dark}` : `${colors.gray.light}`};
  }

  :disabled {
    background-color: ${colors.pink.light};
    cursor: auto;
  }
`;

const LoaderWrapper = styled.div`
  width: 115px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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

  const [card, setCard] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const cardError = useRef(null);
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
      // setIsMounted(true);
      card.mount('card-element');
    }
  }, [cardElement]);

  if (isPaymentSuccessfulStep) {
    return <Redirect to="/checkout/confirmation" />;
  }

  if (isPaymentFailedStep) {
    return <Redirect to="/checkout/failure" />;
  }

  if (clientSecret) {
    const components = monri.components({ clientSecret });

    if (!card) {
      const newCard = components.create('card', style);
      setCard(newCard);
    }

    if (card) {
      card.onChange((event) => {
        if (event.error) {
          const { message } = event.error;
          cardError.current.textContent = message;
        } else {
          cardError.current.textContent = '';
        }
      });
    }

    const handleSubmit = async (event) => {
      setIsLoading(true);
      event.preventDefault();

      const result = await monri.createToken(card);

      if (result.error) {
        //Inform the customer that there was an error.

        cardError.current.textContent = result.error.message;
        setIsLoading(false);
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
            setIsLoading(false);
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
      <Form onSubmit={(event) => handleSubmit(event)}>
        <div className="form-row">
          <Label htmlFor="card-element">Credit or debit card</Label>
          <div ref={cardElement} id="card-element"></div>
          <CardError ref={cardError} id="card-errors" role="alert"></CardError>
        </div>

        {isLoading ? (
          <LoaderWrapper>
            <Loader size={30} />
          </LoaderWrapper>
        ) : (
          <Button>Submit Payment</Button>
        )}
      </Form>
    );
  }

  return null;
};

export default PaymentForm;
