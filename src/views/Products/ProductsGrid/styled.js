import styled from 'styled-components';
import { colors } from 'styles';

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 250px);
  grid-gap: 50px;

  @media (max-width: 1600px) {
    grid-template-columns: repeat(3, 250px);
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 250px);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 170px);
  }

  @media (max-width: 450px) {
    grid-gap: 20px;
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 140px);
  }

  @media (max-width: 320px) {
    grid-template-columns: repeat(1, 100%);
  }
  /* @media (max-width: 400px) {
    width: 130px;
    height: 130px;
  }

  @media (max-width: 330px) {
    width: 200px;
    height: 200px;
  } */
`;

export const NoProductsContainer = styled.div`
  grid-area: productList;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100px;
  min-width: 800px;

  > span {
    font-size: 30px;
    color: ${colors.pink.primary};

    @media (max-width: 600px) {
      font-size: 22px;
    }
  }

  @media (max-width: 1200px) {
    min-width: 600px;
  }

  @media (max-width: 700px) {
    min-width: 500px;
  }

  @media (max-width: 600px) {
    min-width: 400px;
  }

  @media (max-width: 500px) {
    min-width: 350px;
  }

  @media (max-width: 400px) {
    min-width: 280px;
  }

  @media (max-width: 320px) {
    min-width: 260px;
  }
`;

export const Container = styled.div`
  grid-area: productList;
`;
