import styled from 'styled-components';
import { colors } from 'styles';
import fonts from 'assets/fonts';

export const Billing = styled.div`
  margin-bottom: 30px;
`;

export const BillingCheckbox = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;

  > span {
    font-size: 16px;
    font-weight: ${fonts.sfPro.fontWeight.light};
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Buttons = styled.span`
  position: relative;
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 40px;

  > :not(:last-child) {
    margin-right: 20px;
  }
`;

export const Container = styled.div`
  width: 480px;
  > h1 {
    font-size: 25px;
    margin-bottom: 5px;
  }

  @media (max-width: 960px) {
    width: 55%;
  }

  @media (max-width: 770px) {
    width: 80%;
  }
`;

export const PaymentMethods = styled.span`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const OnlinePayment = styled.span`
  display: flex;
  cursor: pointer;
  margin-bottom: 20px;

  > :nth-child(2) {
    > :first-child {
      font-size: 16px;
      font-weight: ${fonts.sfPro.fontWeight.light};
      margin-right: 10px;
    }

    > :nth-child(2) {
      color: red;
    }
  }
`;

export const OfflinePayment = styled.span`
  display: flex;
  cursor: pointer;

  > :nth-child(2) {
    font-size: 16px;
    font-weight: ${fonts.sfPro.fontWeight.light};
  }
`;

export const ErrorMessage = styled.div`
  position: absolute;
  right: 30px;
  top: 45px;
  color: red;
`;
