import styled from 'styled-components';

export const ProductsContainer = styled.div`
  grid-area: productList;
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
