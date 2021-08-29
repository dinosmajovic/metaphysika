import { Container } from './styled';
import Summary from './Summary';
import Details from './Details';

const OrderDetails = ({
  subtotalPrice,
  products,
  type,
  totalPrice,
  deliveryPrice
}) => {
  return (
    <Container>
      <Summary
        subtotalPrice={subtotalPrice}
        type={type}
        totalPrice={totalPrice}
        deliveryPrice={deliveryPrice}
      />
      <Details products={products} />
    </Container>
  );
};

export default OrderDetails;
