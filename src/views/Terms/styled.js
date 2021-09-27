import styled from 'styled-components';
import { colors } from 'styles';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: 70%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    > :first-child {
      font-size: 20px;
      margin-bottom: 15px;
      color: ${colors.pink.primary};
    }

    > :nth-child(2) {
      font-size: 17px;
    }
  }
`;
export const Title = styled.h1`
  font-size: 26px;
  margin: 20px 0px;
  color: ${colors.pink.primary};
`;
