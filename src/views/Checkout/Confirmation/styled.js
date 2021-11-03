import { Link } from 'react-router-dom';
import styled from 'styled-components';
import fonts from 'assets/fonts';
import { colors } from 'styles';

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: 50px 0px;

  > div {
    margin-bottom: 25px;
    width: 220px;
    height: 220px;
    display: flex;
    align-content: center;
    justify-content: center;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (max-width: 600px) {
      width: 180px;
      height: 180px;
    }
  }

  > h1 {
    margin-bottom: 5px;
    font-size: 40px;
    color: ${colors.gray.textLight};
  }

  > h3 {
    color: ${colors.gray.textLight};
    font-weight: ${fonts.sfPro.fontWeight.light};
    font-size: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: 600px) {
    > h1 {
      font-size: 25px;
    }

    > h3 {
      font-size: 18px;
    }
  }
`;

export const PaymentProcessing = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  min-width: 370px;

  > span {
    font-size: 30px;
    color: ${colors.pink.primary};
    font-weight: ${fonts.sfPro.fontWeight.regular};
  }

  > div {
    margin-top: 50px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
