import styled from 'styled-components';

export const ProductsWrapper = styled.div`
  padding: 30px 50px;
  display: grid;
  grid-gap: 40px;
  text-align: center;
  justify-content: center;

  grid-template-areas:
    '. sort'
    'sidebar productList'
    '. buttons';

  @media (max-width: 1230px) {
    padding: 30px 40px;
    grid-gap: 20px;
  }

  @media (max-width: 1150px) {
    justify-content: center;
    align-content: center;
    grid-template-areas:
      'sort'
      'sidebar'
      'productList'
      'buttons';
  }

  @media (max-width: 880px) {
    padding: 20px 20px;
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
