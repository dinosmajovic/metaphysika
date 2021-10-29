import alert from 'assets/icons/alert.svg';
import errorClose from 'assets/icons/errorClose.svg';
import success from 'assets/icons/errorSucces.svg';

import {
  Container,
  CloseMessageWrapper,
  ErrorTitle,
  ErrorDescription
} from './styled';

const ErrorMessage = ({
  errorTitle,
  errorDescription,
  onCloseError,
  type = 'fail'
}) => {
  return (
    <Container type={type}>
      <CloseMessageWrapper onClick={onCloseError} type={type}>
        <img src={errorClose} alt="icon" />
      </CloseMessageWrapper>
      <ErrorTitle type={type}>
        <span>
          {type === 'fail' ? (
            <img src={alert} alt="icon" />
          ) : (
            <img src={success} alt="icon" />
          )}
        </span>
        <span>{errorTitle}</span>
      </ErrorTitle>
      <ErrorDescription>{errorDescription}</ErrorDescription>
    </Container>
  );
};

export default ErrorMessage;
