import Loader from 'components/atoms/Loader/index';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import {
  setClientSecret,
  onSubmitPurchase,
  setIsIsPaymentFailedStep
} from 'state/checkout';
const { TOKEN } = process.env;

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
          color: 'blue'
        },
        label: {
          base: {
            color: 'blue',
            textTransform: 'none'
          },
          invalid: {
            color: 'gray'
          },
          complete: {
            color: 'green'
          }
        },
        input: {
          base: {
            fontSize: '15px',
            color: '#663399'
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
      <>
        <form
          onSubmit={(event) => handleSubmit(event)}
          action=""
          method="post"
          id="payment-form"
          ref={paymentForm}
        >
          <div className="form-row">
            <label htmlFor="card-element">Credit or debit card</label>
            <div ref={cardElement} id="card-element">
              {isMounted ? card.mount('card-element') : <Loader />}
            </div>

            <div ref={cardError} id="card-errors" role="alert"></div>
          </div>
          <button>Submit Payment</button>
        </form>
      </>
    );
  }

  return null;
};

export default PaymentForm;
