import { SummaryContainer } from './styled';

const Summary = ({ price, type }) => {
  return (
    <SummaryContainer>
      <h1>Summary</h1>
      <div>
        {type === 'subTotal' ? <span>Subtotal</span> : <span>Total</span>}
        <span>{price} BAM</span>
      </div>
    </SummaryContainer>
  );
};

export default Summary;
