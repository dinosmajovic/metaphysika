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
  }

  > h3 {
    font-size: 23px;
    margin-bottom: 20px;
    color: ${colors.pink.primary};
  }
`;

export const FormContainer = styled.div`
  width: 380px;
`;

export const LoaderWrapper = styled.div`
  margin-bottom: 5px;
`;
