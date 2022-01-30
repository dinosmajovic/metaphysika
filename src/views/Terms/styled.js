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
  color: ${colors.pink.primary};
  margin: 20px 0px;

  @media (max-width: 600px) {
    font-size: 23px;
  }
`;

export const LogosContainer = styled.span`
  margin-top: 20px;

  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 620px) {
    flex-direction: column;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  margin-right: 80px;
  margin-bottom: 30px;

  > span {
    font-size: 14px;
    color: ${colors.gray.textLight};
  }

  > img {
    height: 70px;
  }

  @media (max-width: 920px) {
    margin-right: 50px;
  }

  @media (max-width: 630px) {
    margin-right: 0px;
  }
`;
