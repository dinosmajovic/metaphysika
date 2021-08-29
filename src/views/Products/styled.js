import styled from 'styled-components';

export const ProductsWrapper = styled.div`
  padding: 30px 50px;
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

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
