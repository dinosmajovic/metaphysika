import { Container } from './styled';
import Summary from './Summary';
import Details from './Details';

const OrderDetails = ({ totalPrice, products, type }) => {
  return (
    <Container>
      <Summary price={totalPrice} type={type} />
      <Details products={products} />
    </Container>
  );
};

export default OrderDetails;
