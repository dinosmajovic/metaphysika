import styled from 'styled-components';
import { colors } from 'styles';

export const ProductContainer = styled.div`
  > p {
    font-size: 20px;
  }
`;

export const Picture = styled.div`
  border: solid 1px ${colors.gray.light};
  padding: 40px;
  position: relative;
  height: 290px;
  display: block;
  text-align: center;
  margin-bottom: 20px;
  cursor: pointer;

  :active,
  :focus {
    border: 1px solid ${colors.pink.primary};
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Heart = styled.div`
  height: 23px;
  width: 23px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  right: 10px;
  bottom: 8px;
  z-index: 10;
`;

export const Label = styled.p`
  margin-bottom: 10px;
`;

export const PictureContainer = styled.div`
  position: relative;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OldPrice = styled.span`
  margin-right: 10px;
  font-size: 19px;
  color: ${colors.pink.primary};
  text-decoration: line-through;
`;

export const Price = styled.span`
  font-size: 19px;
`;

export const Percentage = styled.span`
  position: absolute;

  cursor: default;
  right: 20px;
  top: 20px;
  z-index: 2;
  background-color: ${colors.gray.hover};
  padding: 9px;
  border-radius: 50px;

  > span {
    font-size: 17px;
    color: ${colors.pink.primary};
  }
`;
