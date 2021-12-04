import Button from 'components/atoms/Button';
import checkCircle from 'assets/icons/checkCircle.svg';
import { homePath } from 'constants/routes';
import { Container, StyledLink } from './styled';
import useWindowSize from 'hooks/useWindowSize';

const Confirmation = () => {
  const windowWidth = useWindowSize().width;

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
};

export default Confirmation;
