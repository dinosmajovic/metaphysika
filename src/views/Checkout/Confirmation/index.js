import Button from 'components/atoms/Button';
import checkCircle from 'assets/icons/checkCircle.svg';
import { useState } from 'react';
import { homePath } from 'constants/routes';
import { PaymentProcessing, Container, StyledLink } from './styled';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setPayment } from 'state/payment';
import Loader from 'components/atoms/Loader';

const Confirmation = () => {
  const dispatch = useDispatch();
  const paymentIsAccepted = useSelector(
    (state) => state.payment.paymentIsAccepted
  );
  const [paymentIsProcessing, setPaymentIsProcessing] = useState(true);

  const history = useHistory();

  setTimeout(() => {
    dispatch(setPayment(true));
    setPaymentIsProcessing(false);
  }, 3000);

  if (paymentIsProcessing) {
    return (
      <PaymentProcessing>
        <span>Your payment is processing</span>
        <div>
          <Loader />
        </div>
      </PaymentProcessing>
    );
  } else {
    if (paymentIsAccepted === true) {
      return (
        <Container>
          <span>
            <img src={checkCircle} alt="circle" />
          </span>
          <h1>Thank you !</h1>
          <h3>Payment done successfully</h3>

          <StyledLink to={homePath}>
            <Button size={'big'}>Back to Home</Button>
          </StyledLink>
        </Container>
      );
    } else if (paymentIsAccepted === false) {
      history.replace('/checkout/payment');
      return null;
    }
  }
};

export default Confirmation;
