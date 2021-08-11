import styled from 'styled-components';
import fonts from 'assets/fonts';
import { colors } from 'styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 30px;
`;

export const Title = styled.span`
  font-size: 27px;
  margin-bottom: 15px;

  > span {
    color: ${colors.pink.dark};
  }
`;

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`;
