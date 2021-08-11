import Button from 'components/atoms/Button';
import { colors } from 'styles';
import checkCircle from 'assets/icons/checkCircle.svg';
import { useState } from 'react';
import SyncLoader from 'react-spinners/ClipLoader';
import { homePath } from 'constants/routes';
import { PaymentProcessing, Container, StyledLink } from './styled';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setPayment } from 'state/payment';

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
          <SyncLoader color={colors.pink.primary} loading={true} size={40} />
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
