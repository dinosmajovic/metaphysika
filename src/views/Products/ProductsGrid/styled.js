import styled from 'styled-components';
import { colors } from 'styles';
import fonts from 'assets/fonts';
import { Link } from 'react-router-dom';

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 50px;

  @media (max-width: 1460px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const NoProductsContainer = styled.div`
  grid-area: productList;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  > span {
    font-size: 30px;
    color: ${colors.pink.primary};
  }
`;

export const Container = styled.div`
  grid-area: productList;
`;
