import CheckoutLayout from '../CheckoutLayout';
import { useHistory } from 'react-router-dom';
import Button from 'components/atoms/Button';
import { Container, RegisteredUser, Buttons } from './styled';
import { useFormik } from 'formik';
import validation from './validation';
import AddressForm from 'components/molecules/AddressForm';

const Shipping = (props) => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
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
      console.log(values);
      window.localStorage.setItem('shippingAddress', JSON.stringify(values));
      history.push('/checkout/payment');
    }
  });

  return (
    <CheckoutLayout>
      <Container>
        <h1>Enter shipping address</h1>
        <AddressForm formik={formik} />
        <Buttons>
          <Button type="white" onClick={() => history.push('/bag')}>
            Back
          </Button>
          <Button onClick={formik.submitForm}>Next</Button>
        </Buttons>
      </Container>
    </CheckoutLayout>
  );
};

export default Shipping;
