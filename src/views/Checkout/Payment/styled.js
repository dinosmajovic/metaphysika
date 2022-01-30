import styled from 'styled-components';
import { colors } from 'styles';
import fonts from 'assets/fonts';

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
  margin-bottom: 30px;
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
  min-width: 520px;

  > h1 {
    font-size: 25px;
    margin-bottom: 5px;
  }

  @media (max-width: 600px) {
    min-width: 0px;
    width: 100%;
    padding: 20px;
  }
`;

export const PaymentMethods = styled.span`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const OnlinePayment = styled.span`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-bottom: 10px;

  > :first-child {
    display: flex;
    margin-bottom: 20px;
    font-size: 16px;

    margin-right: 10px;

    > span {
      font-weight: ${fonts.sfPro.fontWeight.light};
    }
  }

  > :nth-child(2) {
    display: flex;
    align-items: center;

    > img {
      :not(:last-child) {
        margin-right: 5px;
      }

      object-fit: cover;

      @media (max-width: 600px) {
        margin-bottom: 20px;
      }
    }

    @media (max-width: 600px) {
      flex-wrap: wrap;
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

export const StyledSpan = styled.span`
  text-decoration: none;
  font-weight: ${fonts.sfPro.fontWeight.light};
  color: ${colors.pink.dark};
  margin-left: 5px;
  border-bottom: 1px solid ${colors.pink.dark};
  cursor: pointer;

  :first-child {
    margin-right: 5px;
  }
`;

export const AgreeToTermsContainer = styled.div`
  display: flex;
  margin-top: 30px;
  color: red;
`;

export const Terms = styled.div`
  font-weight: ${fonts.sfPro.fontWeight.light};
`;

export const CardsContainer = styled.div`
  > img {
    width: 70px;
  }

  > :nth-child(2) {
    width: 60px;
  }
`;
