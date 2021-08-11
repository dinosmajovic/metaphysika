import styled from 'styled-components';
import { colors } from 'styles';

export const SummaryContainer = styled.div`
  width: 400px;
  border: solid 1px ${colors.gray.light};
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 40px;
  border-radius: 7px;

  @media (max-width: 960px) {
    width: 100%;
  }

  > h1 {
    font-size: 22px;
    margin-bottom: 50px;
  }

  > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 5px;
    border-bottom: solid 1px ${colors.gray.light};

    > span {
      font-size: 20px;
    }
  }
`;
