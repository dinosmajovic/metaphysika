import CheckoutLayout from '../CheckoutLayout';
import { useHistory } from 'react-router-dom';
import Button from 'components/atoms/Button';
import { Container, Buttons, ErrorMessage, Wrapper } from './styled';
import { useFormik } from 'formik';
import validation from './validation';
import AddressForm from 'components/molecules/AddressForm';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';
import Loader from 'components/atoms/Loader';
import { setTotal, setDeliveryPrice } from 'state/bag';
import { setIsPaymentStep, setShippingDetails } from 'state/checkout';

const Shipping = (props) => {
  const subtotal = useSelector((state) => state.bag.subtotal);
  const products = useSelector((state) => state.bag.products);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  console.log(userData);

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      firstName: userData.firstName || '',
      lastName: userData.lastName || '',
      email: '',
      phoneNumber: userData.phoneNumber || '',
      address: {
        country: userData.address.country || '',
        city: userData.address.city || '',
        line1: userData.address.line1 || '',
        line2: userData.address.line2 || '',
        zipCode: userData.address.zipCode || ''
      }
    },
    validationSchema: validation,
    onSubmit: (values) => {
      setLoading(true);

      const body = {
        products,
        shippingDetails: values,
        subtotal
      };

      axios
        .post('/checkout/payment', body)
        .then((res) => {
          const isSuccessful = res.data.isSuccessful;

          if (isSuccessful) {
            setLoading(false);
            setErrorMessage(false);
            const deliveryPrice = res.data.deliveryPrice;
            const totalPrice = res.data.total;
            const isPaymentStep = res.data.isPaymentStep;
            const shippingDetails = res.data.shippingDetails;

            dispatch(setTotal(totalPrice));
            dispatch(setDeliveryPrice(deliveryPrice));
            dispatch(setIsPaymentStep(isPaymentStep));
            dispatch(setShippingDetails(shippingDetails));

            history.push('/checkout/payment');
          } else {
            setLoading(false);
            setErrorMessage(res.data.message);
          }
        })
        .catch((err) => history.push('/404'));
    }
  });

  if (loading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else {
    return (
      <CheckoutLayout subtotalPrice={subtotal} type={'subTotal'}>
        <Container>
          <h1>Enter shipping address</h1>
          <AddressForm formik={formik} />
          <Buttons>
            <Button type="white" onClick={() => history.push('/bag')}>
              Back
            </Button>
            <Button onClick={formik.submitForm}>Next</Button>
          </Buttons>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Container>
      </CheckoutLayout>
    );
  }
};

export default Shipping;
