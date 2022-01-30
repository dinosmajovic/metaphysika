import { useSelector } from 'react-redux';
import { SummaryContainer, Total } from './styled';

const Summary = ({ subtotalPrice, type, totalPrice, deliveryPrice }) => {
  const { couponValue } = useSelector((state) => state.checkout);

  let tax = 0.17 * subtotalPrice;
  tax = tax.toFixed(2);

  console.log(subtotalPrice);

  if (type === 'subTotal') {
    return (
      <SummaryContainer type={type}>
        <h1>Summary</h1>
        <div>
          <span>Subtotal</span>
          <span>{subtotalPrice} BAM</span>
        </div>
      </SummaryContainer>
    );
  } else if (type === 'total') {
    return (
      <SummaryContainer>
        <h1>Summary</h1>
        <div>
          <span>Subtotal</span>
          <span>{(subtotalPrice - tax).toFixed(2)} BAM</span>
        </div>
        <div>
          <span>Delivery</span>
          <span>{deliveryPrice} BAM</span>
        </div>
        {couponValue && (
          <div>
            <span>Coupon</span>
            <span>-{couponValue} BAM</span>
          </div>
        )}
        <div>
          <span>Tax</span>
          <span>{tax} BAM</span>
        </div>

        <Total>
          <span>TOTAL</span>
          <span>{totalPrice} BAM</span>
        </Total>
      </SummaryContainer>
    );
  }
};

export default Summary;
