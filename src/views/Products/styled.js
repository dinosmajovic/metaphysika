import styled from 'styled-components';

export const ProductsWrapper = styled.div`
  padding: 40px;
  grid-gap: 40px;
  display: grid;
  justify-content: center;
  grid-template-areas:
    '. sort'
    'sidebar productList'
    '. buttons';

  @media (max-width: 1024px) {
    grid-template-areas:
      'sort'
      'sidebar'
      'productList'
      'buttons';
  }

  padding: 20px;
`;
