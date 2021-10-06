import alert from 'assets/icons/alert.svg';
import errorClose from 'assets/icons/errorClose.svg';
import succes from 'assets/icons/errorSucces.svg';

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
        <img src={errorClose} />
      </CloseMessageWrapper>
      <ErrorTitle type={type}>
        <span>
          {type === 'fail' ? <img src={alert} /> : <img src={succes} />}
        </span>
        <span>{errorTitle}</span>
      </ErrorTitle>
      <ErrorDescription>{errorDescription}</ErrorDescription>
    </Container>
  );
};

export default ErrorMessage;
