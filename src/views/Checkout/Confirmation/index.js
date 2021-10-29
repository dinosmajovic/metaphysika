import Button from 'components/atoms/Button';
import checkCircle from 'assets/icons/checkCircle.svg';
import { homePath } from 'constants/routes';
import { Container, StyledLink } from './styled';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

const Confirmation = () => {
  const { isPaymentSuccessfulStep } = useSelector((state) => state.checkout);

  if (isPaymentSuccessfulStep) {
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
  } else {
    return <Redirect to="/checkout/shipping" />;
  }
};

export default Confirmation;
