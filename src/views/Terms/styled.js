import fonts from 'assets/fonts/index';
import styled from 'styled-components';
import { colors } from 'styles';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: 90%;
    max-width: 2000px;
    display: flex;
    flex-direction: column;

    :not(:last-child) {
      margin-bottom: 50px;
    }

    > :first-child {
      font-size: 20px;
      margin-bottom: 15px;
      color: ${colors.pink.primary};

      @media (max-width: 600px) {
        font-size: 18px;
      }
    }

    > :nth-child(2) {
      font-size: 17px;
      font-weight: ${fonts.sfPro.fontWeight.regular};

      @media (max-width: 600px) {
        font-size: 15px;
      }
    }
  }
`;
export const Title = styled.h1`
  font-size: 26px;
  margin: 20px 0px;
  color: ${colors.pink.primary};

  @media (max-width: 600px) {
    font-size: 23px;
  }
`;
