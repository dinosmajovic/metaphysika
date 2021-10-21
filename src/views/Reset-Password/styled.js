import styled from 'styled-components';
import { colors } from 'styles/index';

export const Container = styled.div`
  background-color: ${colors.white.primary};
  padding: 40px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h2 {
    font-size: 25px;
    margin-bottom: 20px;
    color: ${colors.gray.textLight};

    @media (max-width: 400px) {
      font-size: 20px;
    }
  }

  > h3 {
    font-size: 23px;
    margin-bottom: 20px;
    color: ${colors.pink.primary};

    @media (max-width: 600px) {
      font-size: 18px;
    }
  }
`;

export const FormContainer = styled.div`
  width: 380px;

  @media (max-width: 400px) {
    width: 290px;
  }
`;

export const LoaderWrapper = styled.div`
  margin-bottom: 5px;
`;
