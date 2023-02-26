import { useSelector } from 'react-redux';
import { SummaryContainer, Total, Euro, Vat } from './styled';

const Summary = ({ subtotalPrice, type, totalPrice, deliveryPrice }) => {
  const { couponValue } = useSelector((state) => state.checkout);

  const calculatePriceInEuro = (total) => {
    const totalInEuro = total * 0.5104;
    return Number.parseFloat(totalInEuro).toFixed(2);
  };

  if (type === 'subTotal') {
    return (
      <SummaryContainer type={type}>
        <h1>Summary</h1>
        <div>
          <span>Subtotal</span>
          <span>{subtotalPrice} KM</span>
        </div>
      </SummaryContainer>
    );
  } else if (type === 'total') {
    return (
      <SummaryContainer>
        <h1>Summary</h1>
        <div>
          <span>Subtotal</span>
          <Vat>VAT INCLUDED</Vat>
          <span>{subtotalPrice} KM</span>
        </div>
        <div>
          <span>Delivery</span>
          <span>{deliveryPrice} KM</span>
        </div>
        {couponValue && (
          <div>
            <span>Coupon</span>
            <span>-{couponValue} %</span>
          </div>
        )}
        <Total>
          <span>TOTAL</span>
          <span>{totalPrice} KM</span>
        </Total>
        <Euro>
          {totalPrice} KM = {calculatePriceInEuro(totalPrice)}€
        </Euro>
      </SummaryContainer>
    );
  }
};

export default Summary;
