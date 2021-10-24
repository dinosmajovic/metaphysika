import React from 'react';
import { useFormik } from 'formik';
import addressValidation from 'constants/addressValidation';
import AddressFrom from 'components/molecules/AddressForm';
import Button from 'components/atoms/Button/index';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  align-self: flex-end;
`;

const EditProfile = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      passwordConfirmation: '',
      address: {
        country: '',
        city: '',
        line1: '',
        line2: '',
        zipCode: ''
      }
    },
    validationSchema: addressValidation,
    onSubmit: async (values) => {
      console.log('change user data');
    }
  });

  return (
    <Container>
      <AddressFrom formik={formik} />
      <ButtonWrapper>
        <Button onClick={formik.submitForm}>Save</Button>
      </ButtonWrapper>
    </Container>
  );
};

export default EditProfile;
