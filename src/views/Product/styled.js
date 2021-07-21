import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  padding-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: center;

  @media (max-width: 910px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
