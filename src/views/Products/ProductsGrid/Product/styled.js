import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'styles';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    font-size: 20px;
  }
`;

export const Picture = styled.div`
  padding: 10px;
  position: relative;
  display: block;
  text-align: center;
  margin-bottom: 20px;
  cursor: pointer;
  background-color: white;
  width: 250px;
  height: 250px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 600px) {
    width: 170px;
    height: 170px;
  }

  @media (max-width: 400px) {
    width: 140px;
    height: 140px;
  }

  @media (max-width: 320px) {
    width: 100%;
    height: 200px;
  }
`;

export const Heart = styled.div`
  height: 26px;
  width: 26px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  right: 0px;
  bottom: 0px;
  z-index: 10;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 10px;
  font-size: 20px;

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

export const PictureContainer = styled.div`
  position: relative;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const OldPrice = styled.span`
  margin-right: 10px;
  font-size: 19px;
  color: ${colors.pink.primary};
  text-decoration: line-through;

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

export const Price = styled.span`
  font-size: 19px;

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

export const Percentage = styled.span`
  position: absolute;
  cursor: default;
  right: 20px;
  top: 20px;
  z-index: 2;
  background-color: white;
  border: 1px solid ${colors.gray.hover};
  padding: 9px;
  border-radius: 50px;

  > span {
    font-size: 17px;
    color: ${colors.pink.primary};

    @media (max-width: 600px) {
      font-size: 14px;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
