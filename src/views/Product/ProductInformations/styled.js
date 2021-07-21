import styled from 'styled-components';
import colors from 'styles/Colors';
import fonts from 'assets/fonts';

export const ProductInfo = styled.div`
  width: 50%;

  > h1 {
    font-size: 30px;
    font-weight: ${fonts.sfPro.fontWeight.regular};
    margin-bottom: 7px;
  }

  > h2 {
    font-size: 28;
    font-weight: ${fonts.sfPro.fontWeight.regular};
    margin-bottom: 30px;
  }

  > p {
    font-size: 17px;
    font-weight: ${fonts.sfPro.fontWeight.ultraLight};
    margin-bottom: 20px;
  }

  @media (max-width: 910px) {
    margin-bottom: 30px;
    width: 70%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: relative;
`;

export const Description = styled.div`
  > p {
    font-size: 15px;
    font-weight: ${fonts.sfPro.fontWeight.ultraLight};
    margin-bottom: 20px;
  }

  > ul {
    margin-left: 16px;

    > li {
      font-weight: ${fonts.sfPro.fontWeight.ultraLight};
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  width: 140px;
  height: 40px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: ${fonts.sfPro.fontWeight.semibold};
  background-color: ${colors.pink.primary};
  color: ${colors.white.primary};

  :active {
    background-color: ${colors.pink.dark};
  }

  @media (max-width: 910px) {
    display: none;
  }
`;

export const InputError = styled.span`
  font-size: 18px;
  color: rgba(246, 71, 71, 1);
  position: absolute;
  bottom: -30px;
  right: -10px;
`;
