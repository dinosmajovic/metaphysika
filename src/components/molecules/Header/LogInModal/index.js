import {
  Container,
  FormContainer,
  SingUp,
  ForgotPassword,
  ModalCloseWrapper
} from './styled';
import Input from 'components/atoms/Input';
import { useFormik } from 'formik';
import validation from './validation';
import Button from 'components/atoms/Button';
import ErrorMessage from 'components/atoms/ErrorMessage';
import { useState } from 'react';
import errorMessages from 'constants/errorMessages';
import { ACCOUNTS } from './consts';
import closeModalIcon from 'assets/icons/modalClose.svg';

const LogInModal = ({ setIsLogInModal, setIsSignUpModal }) => {
  const [isError, setIsError] = useState(false);
  const logInErrorMessage = errorMessages.logInError;
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validation,
    onSubmit: (values) => {
      const accountIsExisting = ACCOUNTS.some((ac) => {
        return ac.email === values.email && ac.password === values.password;
      });

      if (accountIsExisting) {
        console.log('set wishlist and bag  and other data of user');
        setIsLogInModal(false);
      } else {
        setIsError(true);
      }
    }
  });
  const onSetSignUpModal = () => {
    setIsLogInModal(false);
    setIsSignUpModal(true);
  };

  const onCloseModal = () => {
    setIsLogInModal(false);
  };

  const onCloseError = () => {
    setIsError(false);
  };
  return (
    <Container>
      <ModalCloseWrapper onClick={onCloseModal}>
        <img src={closeModalIcon} alt="close icon" />
      </ModalCloseWrapper>
      <h1>Log in</h1>
      <SingUp>
        <span>Don’t have an account?</span>
        <span onClick={onSetSignUpModal}>Sign up.</span>
      </SingUp>
      <FormContainer>
        {isError && (
          <ErrorMessage
            errorTitle={logInErrorMessage.title}
            errorDescription={logInErrorMessage.description}
            onCloseError={onCloseError}
          />
        )}
        <Input label="Email" name="email" formik={formik} />
        <Input
          label="Password"
          name="password"
          formik={formik}
          type="password"
        />
      </FormContainer>
      <ForgotPassword>Forgot password?</ForgotPassword>
      <Button
        onClick={() => {
          formik.submitForm();
        }}
      >
        Log in
      </Button>
    </Container>
  );
};

export default LogInModal;
