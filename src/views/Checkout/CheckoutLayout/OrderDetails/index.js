import {
  Container,
  PromoCodeWrapper,
  Input,
  ApplyButton,
  LogoContainer,
  LogosContainer
} from './styled';
import Summary from './Summary';
import Details from './Details';
import { onApplyCoupon } from 'state/checkout';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import visa_secure from 'assets/images/logos/visa_secure.jpg';
import mc_check from 'assets/images/logos/mc_check.png';
import monri from 'assets/images/logos/monri.png';

const OrderDetails = ({
  subtotalPrice,
  products,
  type,
  totalPrice,
  deliveryPrice
}) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      coupon: ''
    },

    onSubmit: (values) => {
      const { coupon } = values;
      if (coupon.length > 0) {
        dispatch(onApplyCoupon({ coupon }));
      }
    }
  });

  return (
    <Container type={type}>
      <Summary
        subtotalPrice={subtotalPrice}
        type={type}
        totalPrice={totalPrice}
        deliveryPrice={deliveryPrice}
      />

      {type === 'total' && (
        <PromoCodeWrapper>
          <Input
            {...formik.getFieldProps('coupon')}
            placeholder="Enter your coupon code"
          />
          <ApplyButton onClick={formik.submitForm}>Apply</ApplyButton>
        </PromoCodeWrapper>
      )}

      <Details products={products} />

      {type === 'total' && (
        <LogosContainer>
          <LogoContainer>
            <span>Your transactions are secure with Visa</span>
            <img src={visa_secure} alt="Visa secure" />
          </LogoContainer>
          <LogoContainer>
            <span>Mastercard® Identity Check™</span>
            <img src={mc_check} alt="Mastercard check" />
          </LogoContainer>
          <LogoContainer>
            <span>Monri</span>
            <img src={monri} alt="Monri" />
          </LogoContainer>
        </LogosContainer>
      )}
    </Container>
  );
};

export default OrderDetails;
