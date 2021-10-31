import styled from 'styled-components';

export const FormContainer = styled.div`
  margin-top: 20px;
  width: 100%;

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    width: calc(50% - 10px);
  }

  @media (max-width: 600px) {
    flex-direction: column;

    > div {
      width: 100%;
    }
  }
`;
