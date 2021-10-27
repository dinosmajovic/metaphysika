import styled from 'styled-components';

export const MyProfileWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;
