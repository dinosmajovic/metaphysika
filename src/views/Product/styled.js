import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  padding: 50px 20px;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 20px;
  }
`;

export const ProductDataWrapper = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
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
