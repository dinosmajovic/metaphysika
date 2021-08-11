import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15%;

  @media (max-width: 1060px) {
    margin-left: 50px;
  }

  @media (max-width: 960px) {
    margin: 0;
    margin-top: 40px;
    width: 55%;
  }

  @media (max-width: 770px) {
    width: 80%;
  }
`;
