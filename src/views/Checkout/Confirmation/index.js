import checkCircle from 'assets/icons/checkCircle.svg';
import { homePath } from 'constants/routes';
import { Container, StyledLink } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import useWindowSize from 'hooks/useWindowSize';
import { useEffect } from 'react';
import { setIsPaymentSuccessfulStep } from 'state/checkout';
import Button from 'components/atoms/Button/index';

const Confirmation = () => {
  const { isPaymentSuccessfulStep } = useSelector((state) => state.checkout);
  const windowWidth = useWindowSize().width;
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setIsPaymentSuccessfulStep(false));
    };
  }, [dispatch]);

  if (isPaymentSuccessfulStep) {
    return (
      <Container>
        <div>
          <img src={checkCircle} alt="circle" />
        </div>
        <h1>Thank you !</h1>
        <h3>Payment done successfully</h3>

        <StyledLink to={homePath}>
          <Button size={windowWidth > 600 ? 'big' : 'medium'}>
            Back to Home
          </Button>
        </StyledLink>
      </Container>
    );
  } else {
    return <Redirect to="/checkout/shipping" />;
  }
};

export default Confirmation;
