import alert from 'assets/icons/alert.svg';
import errorClose from 'assets/icons/errorClose.svg';
import {
  Container,
  CloseMessageWrapper,
  ErrorTitle,
  ErrorDescription,
} from './styled';

const ErrorMessage = ({ errorTitle, errorDescription, onCloseError }) => {
  return (
    <Container>
      <CloseMessageWrapper onClick={onCloseError}>
        <img src={errorClose} />
      </CloseMessageWrapper>
      <ErrorTitle>
        <span>
          <img src={alert} />
        </span>
        <span>{errorTitle}</span>
      </ErrorTitle>
      <ErrorDescription>{errorDescription}</ErrorDescription>
    </Container>
  );
};

export default ErrorMessage;
