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
  StyledSpan
} from './styled';
import Button from 'components/atoms/Button';
import { termsOfService, privacyPolicyPath } from 'constants/routes';
import { useHistory } from 'react-router-dom';
import ErrorMessage from 'components/atoms/ErrorMessage/index';
import { logInUser } from 'state/user';
import { useDispatch } from 'react-redux';
import Loader from 'components/atoms/Loader';
import axios from 'axios';
import { onOpenLogInModal } from 'state/modal';
import { ModalCloseWrapper } from '../LogInModal/styled';
import closeModalIcon from 'assets/icons/modalClose.svg';
import { API } from 'api';

const SignUpModal = ({ setIsSignUpModal }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isAgreedToTerms, setIsAgreedToTerms] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorDescription, setErrorDescription] = useState('');
  const [errorTitle, setErrorTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const signUpUser = async (email, password, userData) => {
    try {
      const user = await axios.post(API + '/signUpUser', {
        email,
        password,
        userData
      });

      const userDataFromServer = user.data.userData;

      const { refreshToken, tokenExpirationTime, token } = user.data;

      dispatch(
        logInUser({
          token,
          userData: userDataFromServer,
          refreshToken,
          tokenExpirationTime
        })
      );
      setIsLoading(false);
      setIsSignUpModal(false);
    } catch (error) {
      const errorTitle = error.response.data.title;
      const errorDescription = error.response.data.description;
      setErrorTitle(errorTitle);
      setErrorDescription(errorDescription);
      setIsError(true);
      setIsLoading(false);
    }
  };

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
    onSubmit: async (values) => {
      if (isAgreedToTerms) {
        setIsLoading(true);

        const email = values.email;
        const password = values.password;
        const userData = {
          address: values.address,
          firstName: values.firstName,
          lastName: values.lastName,
          phoneNumber: values.phoneNumber
        };

        signUpUser(email, password, userData);
      } else {
        setErrorTitle('Terms not accepted');
        setErrorDescription(
          'Please accept our terms of service and privacy policy to continue'
        );
        setIsError(true);
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
    dispatch(onOpenLogInModal());
  };

  const onGoToTerms = () => {
    setIsSignUpModal(false);
    history.push(termsOfService);
  };

  const onGoToPolicy = () => {
    setIsSignUpModal(false);
    history.push(privacyPolicyPath);
  };

  const onCloseError = () => {
    setIsError(false);
    setErrorTitle('');
    setErrorDescription('');
  };

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <Container>
        <ModalCloseWrapper onClick={onCloseModal}>
          <img src={closeModalIcon} alt="close icon" />
        </ModalCloseWrapper>
        <h1>Sign up</h1>
        {isError && (
          <ErrorMessage
            errorTitle={errorTitle}
            errorDescription={errorDescription}
            onCloseError={onCloseError}
          />
        )}
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
            <StyledSpan onClick={onGoToTerms}>Terms of service</StyledSpan>and
            <StyledSpan onClick={onGoToPolicy}>Privacy policy</StyledSpan>.
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
  }
};

export default SignUpModal;
