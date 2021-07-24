import { useFormik } from 'formik';
import validation from './validation';
import AddressForm from 'components/molecules/AddressForm';
import Input from 'components/atoms/Input';
import checkmark from 'assets/icons/checkmark.svg';
import CheckBox from 'components/atoms/CheckBox';
import { useState } from 'react';
import {
  Container,
  FormRow,
  Terms,
  Buttons,
  LogIn,
  StyledLink,
  TermsErrorMessage
} from './styled';
import Button from 'components/atoms/Button';
import { termsOfService, privacyPolicyPath } from 'constants/routes';

const SignUpModal = ({ setIsSignUpModal, setIsLogInModal }) => {
  const [isAgreedToTerms, setIsAgreedToTerms] = useState(false);
  const [isTermsErrorMessage, setIsTermsErrorMessage] = useState(false);

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
    validationSchema: validation,
    onSubmit: (values) => {
      if (isAgreedToTerms) {
        console.log('sign up user');
        setIsSignUpModal(false);
        setIsTermsErrorMessage(!isAgreedToTerms);
      } else {
        setIsTermsErrorMessage(!isAgreedToTerms);
      }
    }
  });

  const onBoxClick = () => {
    setIsAgreedToTerms(!isAgreedToTerms);
  };

  const onCloseModal = () => {
    setIsSignUpModal(false);
  };

  const onSetSignUpModal = () => {
    setIsSignUpModal(false);
    setIsLogInModal(true);
  };

  return (
    <Container>
      {isTermsErrorMessage && (
        <TermsErrorMessage>
          Please accept the terms of service first
        </TermsErrorMessage>
      )}
      <h1>Sign up</h1>
      <LogIn>
        Already have an account?
        <span onClick={onSetSignUpModal}>Log in.</span>
      </LogIn>

      <AddressForm formik={formik} />

      <FormRow>
        <Input
          label="Password"
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
      </FormRow>

      <Terms>
        <CheckBox onBoxClick={onBoxClick}>
          {isAgreedToTerms && <img src={checkmark} alt={'checkmark'} />}
        </CheckBox>
        <div>
          I agree to
          <StyledLink to={termsOfService}>Terms of service</StyledLink>and
          <StyledLink to={privacyPolicyPath}>Privacy policy</StyledLink>.
        </div>
      </Terms>

      <Buttons>
        <span onClick={onCloseModal}>Cancel</span>
        <Button size="medium" onClick={formik.submitForm}>
          Sign up
        </Button>
      </Buttons>
    </Container>
  );
};

export default SignUpModal;
