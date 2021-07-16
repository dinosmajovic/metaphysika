import styled from 'styled-components';

export const ProductsWrapper = styled.div`
  padding: 0 50px;
  padding-bottom: 30px;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: auto 1fr;
  text-align: center;
  justify-content: center;

  grid-template-areas:
    '. sort'
    'sidebar productList'
    '. buttons';

  @media (max-width: 1200px) {
    grid-column-gap: 0px;
    padding: 30px;
    grid-template-areas:
      '. topbar'
      '. sort'
      '. productList'
      '. buttons';
  }
`;
