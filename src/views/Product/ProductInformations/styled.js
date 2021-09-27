import styled from 'styled-components';
import { colors } from 'styles';
import fonts from 'assets/fonts';

export const ProductInfo = styled.div`
  width: 600px;

  > p {
    font-size: 17px;
    font-weight: ${fonts.sfPro.fontWeight.ultraLight};
    margin-bottom: 20px;
  }

  @media (max-width: 950px) {
    padding: 20px;
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  position: relative;

  @media (max-width: 950px) {
    margin-top: 50px;
  }
`;

export const Description = styled.div`
  margin-bottom: 20px;
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
`;

export const InputError = styled.span`
  font-size: 16px;
  color: ${colors.pink.dark};
  position: absolute;
  bottom: -25px;
  right: 40px;

  @media (max-width: 910px) {
    display: none;
  }
`;

export const QuantityError = styled.span`
  font-size: 16px;
  color: ${colors.pink.dark};
  position: absolute;
  bottom: -25px;
  right: -2px;

  @media (max-width: 910px) {
    display: none;
  }
`;

export const PriceContainer = styled.span`
  display: flex;
  margin-bottom: 30px;
`;

export const OldPrice = styled.span`
  margin-right: 10px;
  font-size: 26px;
  color: ${colors.pink.primary};
  text-decoration: line-through;
  font-weight: ${fonts.sfPro.fontWeight.regular};
`;

export const Price = styled.span`
  font-size: 26px;
  font-weight: ${fonts.sfPro.fontWeight.regular};
`;

export const ProductName = styled.span`
  display: flex;
  margin-bottom: 8px;
  > h1 {
    font-size: 30px;
    font-weight: ${fonts.sfPro.fontWeight.regular};
    margin-right: 15px;
  }

  > span {
    cursor: default;
    color: ${colors.pink.primary};

    font-size: 30px;
  }
`;

export const LikeWrapper = styled.div`
  width: 34px;
  height: 34px;
  display: flex;
  cursor: pointer;
  margin-left: 20px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
