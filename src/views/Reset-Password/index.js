import React from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router';
import { Container, FormContainer, LoaderWrapper } from './styled';
import Input from 'components/atoms/Input';
import { useFormik } from 'formik';
import Button from 'components/atoms/Button';
import ErrorMessage from 'components/atoms/ErrorMessage';
import { useState } from 'react';
import Loader from 'components/atoms/Loader/index';
import * as Yup from 'yup';
import { API } from 'api';

const ResetPassword = () => {
  const params = useParams();
  const [isError, setIsError] = useState(false);
  const [errorDescription, setErrorDescription] = useState('');
  const [errorTitle, setErrorTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [passwordIsChanged, setpasswordIsChanged] = useState(false);

  const history = useHistory();

  const onPasswordReset = async (password) => {
    const token = params.token;
    setIsLoading(true);

    try {
      const resetPassword = await axios.post(API + '/forgotPasswordReset', {
        token,
        password
      });

      setConfirmationMessage(resetPassword.data);
      setpasswordIsChanged(true);
      setIsLoading(false);
    } catch (error) {
      const errorTitle = error.response.data.errorTitle;
      const errorDescription = error.response.data.errorDescription;

      setErrorDescription(errorDescription);
      setErrorTitle(errorTitle);
      setIsError(true);
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      password: '',
      passwordConfirmation: ''
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Must be at least 6 digits'),
      passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Repeating password is required')
    }),
    onSubmit: (values) => {
      onPasswordReset(values.password);
    }
  });

  const onCloseError = () => {
    setIsError(false);
    setErrorTitle(null);
    setErrorTitle(null);
  };

  if (isLoading) {
    return (
      <Container>
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      </Container>
    );
  } else if (passwordIsChanged) {
    return (
      <Container>
        <h3>{confirmationMessage}</h3>
        <Button
          onClick={() => {
            history.push('/');
          }}
        >
          Home
        </Button>
      </Container>
    );
  } else {
    return (
      <Container>
        <h2>New password</h2>
        {isLoading && <Loader />}
        <FormContainer>
          {isError && (
            <ErrorMessage
              errorTitle={errorTitle}
              errorDescription={errorDescription}
              onCloseError={onCloseError}
            />
          )}
          <Input
            label="New password"
            name="password"
            formik={formik}
            type="password"
          />
          <Input
            label="Repeat new password "
            name="passwordConfirmation"
            formik={formik}
            type="password"
          />
        </FormContainer>
        <Button
          onClick={() => {
            formik.submitForm();
          }}
        >
          Change
        </Button>
      </Container>
    );
  }
};

export default ResetPassword;
