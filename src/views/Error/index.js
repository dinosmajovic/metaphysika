import { Container } from './styled';
import Button from 'components/atoms/Button';
import { Link } from 'react-router-dom';

const Error = ({ title, description, payment }) => {
  if (title && description) {
    return (
      <Container>
        <span></span>
        <span>{title}</span>
        <p>{description}</p>
        <Link to={'/'}>
          <Button size="big">BACK TO HOME</Button>
        </Link>
      </Container>
    );
  } else {
    return (
      <Container>
        <span>404</span>
        <span>OPPS! PAGE NOT FOUND</span>
        <p>
          Sorry, the page you're looking for doesn't exist. If you think
          something is broken, please report a problem.
        </p>
        <Link to={'/'}>
          <Button size="big">BACK TO HOME</Button>
        </Link>
      </Container>
    );
  }
};

export default Error;
