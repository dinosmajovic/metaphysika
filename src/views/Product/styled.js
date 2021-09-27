import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  padding: 50px 20px;
  justify-content: center;

  @media (max-width: 950px) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 10px 0px;
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
