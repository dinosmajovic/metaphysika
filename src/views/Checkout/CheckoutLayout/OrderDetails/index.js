import { Container, PromoCodeWrapper, Input, ApplyButton } from './styled';
import Summary from './Summary';
import Details from './Details';
import { onApplyCoupon } from 'state/checkout';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

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
    </Container>
  );
};

export default OrderDetails;
