import { CardContainer, Title, FormRow } from './styled';
import { FormContainer } from './styled';
import maestroCard from 'assets/icons/maestro.svg';
import masterCard from 'assets/icons/master.svg';
import visaCard from 'assets/icons/visa.svg';

import Input from 'components/atoms/Input';

const Card = ({ formik }) => {
  return (
    <CardContainer>
      <Title>
        <h1>Payment details</h1>
        <span>
          <span>
            <img src={visaCard} alt="visa card" />
          </span>
          <span>
            <img src={masterCard} alt="master card" />
          </span>
          <span>
            <img src={maestroCard} alt="maestro card" />
          </span>
        </span>
      </Title>
      <FormContainer>
        <Input
          label="Card number"
          name="cardNumber"
          formik={formik}
          isMasked
          mask="9999 9999 9999 9999"
        />
        <Input label="Name on card" name="cardName" formik={formik} />
        <FormRow>
          <Input
            label="MM/YY"
            name="expirationDate"
            formik={formik}
            isMasked
            mask="99 / 99"
          />
          <Input label="CVV" name="cvv" formik={formik} isMasked mask="999" />
        </FormRow>
      </FormContainer>
    </CardContainer>
  );
};

export default Card;
