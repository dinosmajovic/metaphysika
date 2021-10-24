import React from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';
import Input from 'components/atoms/Input';
import { BottomButton } from '../../UserData/styled';
import * as Yup from 'yup';
import { deleteUser, onCloseError } from 'state/user';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/atoms/Loader';
import ErrorMessage from 'components/atoms/ErrorMessage/index';

const VALIDATION = Yup.object({
  password: Yup.string().required('Password is required').min(6, 'Min 6 digits')
});

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 16px;
    margin-bottom: 20px;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  height: fit-content;
`;

const DeleteAccount = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const { isLoading, isError, errorMessage } = useSelector(
    (state) => state.user
  );

  const formik = useFormik({
    initialValues: {
      password: ''
    },
    validationSchema: VALIDATION,
    onSubmit: async (values) => {
      const { password } = values;
      dispatch(deleteUser({ password }));
    }
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      {isError && (
        <ErrorMessage
          errorTitle={errorMessage.title}
          errorDescription={errorMessage.description}
          onCloseError={() => dispatch(onCloseError())}
        />
      )}
      <h1>Are you sure you want to delete your account?</h1>
      <InputWrapper>
        <Input
          label="Password"
          name="password"
          type="password"
          formik={formik}
        />
      </InputWrapper>
      <BottomButton type="pink" onClick={formik.submitForm}>
        Delete account
      </BottomButton>
      <BottomButton onClick={onCloseModal}>Cancel</BottomButton>
    </Container>
  );
};

export default DeleteAccount;
