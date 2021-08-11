import styled from 'styled-components';
import { colors } from 'styles';

export const DetailsContainer = styled.div`
  border: solid 1px ${colors.gray.light};
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 390px;
  margin-bottom: 40px;

  > div {
    width: 100%;
    overflow: scroll;
  }
`;

export const Title = styled.span`
  font-size: 22px;
  padding: 10px;

  > span {
    color: ${colors.pink.dark};
  }
`;
