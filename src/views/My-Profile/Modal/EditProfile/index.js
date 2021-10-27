import React from 'react';
import { useFormik } from 'formik';
import AddressFrom from 'components/molecules/AddressForm';
import Button from 'components/atoms/Button/index';
import styled from 'styled-components';
import Input from 'components/atoms/Input/index';
import validation from './validation';
import { onEditProfile } from 'state/user';
import { useDispatch, useSelector } from 'react-redux';
import ErrorMessage from 'components/atoms/ErrorMessage/index';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  align-self: flex-end;
`;

const EditProfile = () => {
  const dispatch = useDispatch();
  const { isError, errorMessage, profileIsEdited } = useSelector(
    (state) => state.user
  );
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      address: {
        country: '',
        city: '',
        line1: '',
        line2: '',
        zipCode: ''
      }
    },
    validationSchema: validation,
    onSubmit: async (values) => {
      const form = values;
      dispatch(onEditProfile({ form }));
    }
  });

  return (
    <Container>
      {isError && (
        <ErrorMessage
          errorTitle={errorMessage.title}
          errorDescription={errorMessage.description}
        />
      )}
      {profileIsEdited && (
        <ErrorMessage
          type="succes"
          errorTitle={'Profile edited'}
          errorDescription={'Your profile has been changed successfully'}
        />
      )}

      <AddressFrom formik={formik} />
      <Input label="Password" name="password" formik={formik} type="password" />
      <ButtonWrapper>
        <Button onClick={formik.submitForm}>Save</Button>
      </ButtonWrapper>
    </Container>
  );
};

export default EditProfile;
