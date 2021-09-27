import styled from 'styled-components';
import { colors } from 'styles';

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;

  /* display: grid;
    border: solid 1px black; */

  /* grid-auto-columns: repeat (5, 50px); */

  @media (max-width: 1560px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1200px) {
    grid-gap: 20px;
  }

  @media (max-width: 880px) {
    grid-template-columns: repeat(2, 300px);
  }

  @media (max-width: 670px) {
    grid-gap: 20px;
    justify-content: space-between;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 550px) {
    grid-gap: 20px;
    justify-content: space-between;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 469px) {
    justify-content: space-between;
    grid-template-columns: repeat(2, 180px);
    grid-gap: 10px;
  }

  @media (max-width: 405px) {
    justify-content: space-between;
    grid-template-columns: repeat(2, 155px);
    grid-gap: 10px;
  }

  @media (max-width: 350px) {
    grid-gap: 5px;
  }

  @media (max-width: 330px) {
    grid-template-columns: repeat(1, 200px);
    align-items: center;
    justify-content: center;
  }
`;

export const NoProductsContainer = styled.div`
  grid-area: productList;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-width: 800px;

  > span {
    font-size: 30px;
    color: ${colors.pink.primary};

    @media (max-width: 1150px) {
      font-size: 25px;
    }
  }

  @media (max-width: 1150px) {
    min-width: auto;
  }
`;

export const Container = styled.div`
  grid-area: productList;
`;
