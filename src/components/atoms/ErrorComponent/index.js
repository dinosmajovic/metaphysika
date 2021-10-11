import { Container } from './styled';
import Button from 'components/atoms/Button';
import { Link } from 'react-router-dom';

const Error = ({ title, description }) => {
  if (title && description) {
    return (
      <Container>
        <span>404</span>
        <span>{title}</span>
        <p>{description}</p>
        <Link to={'/'}>
          <Button size="big">BACK TO HOME</Button>
        </Link>
      </Container>
    );
  }
};

export default Error;
