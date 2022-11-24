import { Container, SummaryItem, SummaryItems } from './styled';

const Summary = ({ order }) => {
  return (
    <Container>
      <h1>Summary</h1>
      <SummaryItems>
        <SummaryItem>
          <span>Subtotal:</span>
          <span>{order.subtotal} BAM</span>
        </SummaryItem>
        <SummaryItem>
          <span>Delivery:</span>
          <span>{order.shippingPrice} BAM</span>
        </SummaryItem>
        {order.couponValue ? (
          <SummaryItem>
            <span>Coupon</span>
            <span>- {order.couponValue} %</span>
          </SummaryItem>
        ) : null}
        <SummaryItem type="total">
          <span>Total</span>
          <span>{order.total} BAM</span>
        </SummaryItem>
      </SummaryItems>
    </Container>
  );
};

export default Summary;
