import CheckoutLayout from '../CheckoutLayout';
import { useHistory } from 'react-router-dom';
import Button from 'components/atoms/Button';
import {
  Container,
  Buttons,
  Wrapper,
  ShippingAddress,
  BillingAddress,
  Addresses,
  BillingCheckbox
} from './styled';
import { useFormik } from 'formik';
import validation from './validation';
import AddressForm from 'components/molecules/AddressForm';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/atoms/Loader';
import { closeError, onCalculateShipping, resetCheckout } from 'state/checkout';
import ErrorMessage from 'components/atoms/ErrorMessage';
import checkmark from 'assets/icons/checkmark.svg';
import CheckBox from 'components/atoms/CheckBox';
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { bagPath } from 'constants/routes';

const Shipping = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [billingAddressIsShipping, setBillingAddressIsShipping] =
    useState(true);
  const { subtotal, products } = useSelector((state) => state.bag);
  const { userData } = useSelector((state) => state.user);
  const { isLoading, isError, errorMessage, isPaymentStep, shippingInfo } =
    useSelector((state) => state.checkout);
  const [shippingAddres, setShippingAddress] = useState();

  const formik = useFormik({
    initialValues: {
      firstName: shippingInfo?.firstName || userData?.firstName || '',
      lastName: shippingInfo?.lastName || userData?.lastName || '',
      email: shippingInfo?.email || userData?.email || '',
      phoneNumber: shippingInfo?.phoneNumber || userData?.phoneNumber || '',
      address: {
        country:
          shippingInfo?.address?.country || userData?.address?.country || '',
        city: shippingInfo?.address?.city || userData?.address?.city || '',
        line1: shippingInfo?.address?.line1 || userData?.address?.line1 || '',
        line2: shippingInfo?.address?.line2 || userData?.address?.line2 || '',
        zipCode:
          shippingInfo?.address?.zipCode || userData?.address?.zipCode || ''
      }
    },
    validationSchema: validation,
    onSubmit: (values) => {
      if (billingAddressIsShipping) {
        dispatch(
          onCalculateShipping({
            shippingInfo: values,
            billingInfo: values,
            bagProducts: products
          })
        );
      } else {
        setShippingAddress(values);
        billingFormik.submitForm();
      }
    }
  });

  const billingFormik = useFormik({
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
    onSubmit: (values, test) => {
      dispatch(
        onCalculateShipping({
          shippingInfo: shippingAddres,
          billingInfo: values,
          bagProducts: products
        })
      );
    }
  });

  useEffect(() => {
    dispatch(closeError());
  }, [dispatch]);

  const onCloseError = () => {
    dispatch(closeError());
  };

  const onSetBillingAddress = () => {
    setBillingAddressIsShipping(!billingAddressIsShipping);
  };

  const onBack = () => {
    dispatch(resetCheckout());
    history.push(bagPath);
  };

  if (isLoading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }

  if (isPaymentStep) {
    return <Redirect to="/checkout/payment" />;
  }

  if (products.length < 1) {
    return <Redirect to="/bag" />;
  }

  return (
    <CheckoutLayout subtotalPrice={subtotal} type={'subTotal'}>
      <Addresses>
        <ShippingAddress>
          <Container>
            <h1>Enter shipping address</h1>
            {isError && (
              <ErrorMessage
                errorTitle={errorMessage.title}
                errorDescription={errorMessage.description}
                onCloseError={onCloseError}
              />
            )}
            <AddressForm formik={formik} />
            <Buttons>
              <Button type="white" onClick={onBack}>
                Back
              </Button>
              <Button onClick={formik.submitForm}>Next</Button>
            </Buttons>
          </Container>
        </ShippingAddress>
        <BillingAddress>
          <Container>
            <h3>Billing address</h3>
            <BillingCheckbox onClick={onSetBillingAddress}>
              <CheckBox>
                {billingAddressIsShipping && (
                  <img src={checkmark} alt={'checkmark'} />
                )}
              </CheckBox>
              <span>Same as shipping address</span>
            </BillingCheckbox>
            {!billingAddressIsShipping && (
              <AddressForm formik={billingFormik} />
            )}
          </Container>
        </BillingAddress>
      </Addresses>
    </CheckoutLayout>
  );
};

export default Shipping;
