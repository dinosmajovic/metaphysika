import {
  Container,
  FormContainer,
  SignUp,
  ForgotPassword,
  ModalCloseWrapper,
  ResetPasswordTitle
} from './styled';
import Input from 'components/atoms/Input';
import { useFormik } from 'formik';
import validation from './validation';
import Button from 'components/atoms/Button';
import ErrorMessage from 'components/atoms/ErrorMessage';
import { useState } from 'react';
import closeModalIcon from 'assets/icons/modalClose.svg';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { logInUser } from 'state/user';
import Loader from 'components/atoms/Loader/index';
import * as Yup from 'yup';
import { onCloseLogInModal } from 'state/modal';
import { LoaderWrapper } from 'components/atoms/Loader/styledWrapper';

const LogInModal = ({ setIsSignUpModal }) => {
  const [isError, setIsError] = useState(false);
  const [errorDescription, setErrorDescription] = useState('');
  const [errorTitle, setErrorTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [passwordIsForgotten, setPasswordIsForgotten] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [emailIsSent, setEmailIsSent] = useState(false);

  const onLogInUser = async (email, password) => {
    setIsLoading(true);

    try {
      const user = await axios.post('/logInUser', {
        email,
        password
      });

      let { token, refreshToken, tokenExpirationTime, userData } = user.data;

      tokenExpirationTime = parseInt(tokenExpirationTime);

      dispatch(
        logInUser({ token, userData, refreshToken, tokenExpirationTime })
      );

      dispatch(onCloseLogInModal());
    } catch (error) {
      const errorTitle = error.response.data.title;
      const errorDescription = error.response.data.description;

      setErrorTitle(errorTitle);
      setErrorDescription(errorDescription);
      setIsError(true);
      setIsLoading(false);
    }
  };

  const onSendVerificationEmail = async (email) => {
    setIsLoading(true);
    onCloseError();
    setEmailIsSent(false);

    try {
      const result = await axios.post('/forgotUserPassword', {
        email
      });

      const confirmationMessage = result.data;

      setConfirmationMessage(confirmationMessage);
      setEmailIsSent(true);
      setIsLoading(false);
    } catch (error) {
      const errorTitle = error.response.data.errorTitle;
      const errorDescription = error.response.data.errorDescription;

      setErrorTitle(errorTitle);
      setErrorDescription(errorDescription);
      setIsError(true);
      setIsLoading(false);
    }
  };

  const resetPasswordFormik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required')
    }),
    onSubmit: (values) => {
      onSendVerificationEmail(values.email);
    }
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validation,
    onSubmit: (values) => {
      onLogInUser(values.email, values.password);
    }
  });
  const onSetSignUpModal = () => {
    dispatch(onCloseLogInModal());
    setIsSignUpModal(true);
  };

  const onCloseModal = () => {
    dispatch(onCloseLogInModal());
  };

  const onCloseError = () => {
    setIsError(false);
    setErrorTitle('');
    setErrorDescription('');
  };

  const onForgotPassword = () => {
    setPasswordIsForgotten(true);
    onCloseError();
  };

  if (isLoading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  } else if (passwordIsForgotten) {
    return (
      <Container>
        <ModalCloseWrapper onClick={onCloseModal}>
          <img src={closeModalIcon} alt="close icon" />
        </ModalCloseWrapper>
        <ResetPasswordTitle>Enter your email address</ResetPasswordTitle>
        <FormContainer>
          {emailIsSent && (
            <ErrorMessage
              errorTitle="Email was sent succesfully"
              errorDescription={confirmationMessage}
              type={'success'}
            />
          )}
          {isError && (
            <ErrorMessage
              errorTitle={errorTitle}
              errorDescription={errorDescription}
              onCloseError={onCloseError}
            />
          )}
          <Input label="Email" name="email" formik={resetPasswordFormik} />
        </FormContainer>
        <Button
          onClick={() => {
            resetPasswordFormik.submitForm();
          }}
        >
          Send
        </Button>
      </Container>
    );
  } else {
    return (
      <Container>
        <ModalCloseWrapper onClick={onCloseModal}>
          <img src={closeModalIcon} alt="close icon" />
        </ModalCloseWrapper>
        <h1>Log in</h1>
        <SignUp>
          <span>Don’t have an account?</span>
          <span onClick={onSetSignUpModal}>Sign up.</span>
        </SignUp>
        <FormContainer>
          {isError && (
            <ErrorMessage
              errorTitle={errorTitle}
              errorDescription={errorDescription}
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
        <ForgotPassword onClick={onForgotPassword}>
          Forgot password?
        </ForgotPassword>
        <Button
          onClick={() => {
            formik.submitForm();
          }}
        >
          Log in
        </Button>
      </Container>
    );
  }
};

export default LogInModal;
