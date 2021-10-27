import React from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';
import Input from 'components/atoms/Input';
import { BottomButton } from '../../UserData/styled';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import ErrorMessage from 'components/atoms/ErrorMessage';
import { changePassword, onCloseError } from 'state/user';

const VALIDATION = Yup.object({
  currentPassword: Yup.string()
    .required('Password is required')
    .min(6, 'Min 6 digits'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Must be at least 6 digits'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required')
});

const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const ChangePassword = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const { isError, errorMessage, isPasswordChanged } = useSelector(
    (state) => state.user
  );

  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      password: '',
      passwordConfirmation: ''
    },
    validationSchema: VALIDATION,
    onSubmit: async (values) => {
      const currentPassword = values.currentPassword;
      const newPassword = values.password;
      dispatch(changePassword({ currentPassword, newPassword }));
    }
  });

  return (
    <Container>
      {isError && (
        <ErrorMessage
          onCloseError={() => dispatch(onCloseError())}
          errorTitle={errorMessage.title}
          errorDescription={errorMessage.description}
        />
      )}
      {isPasswordChanged && (
        <ErrorMessage
          type="succes"
          errorTitle={'Password changed'}
          errorDescription={'Your password has been  changed successfully'}
        />
      )}
      <Input
        label="Current password"
        name="currentPassword"
        type="password"
        formik={formik}
      />
      <Input
        label="New password"
        name="password"
        formik={formik}
        type="password"
      />
      <Input
        label="Repeat password"
        name="passwordConfirmation"
        formik={formik}
        type="password"
      />

      <BottomButton type="pink" onClick={formik.submitForm}>
        Change password
      </BottomButton>
    </Container>
  );
};

export default ChangePassword;
