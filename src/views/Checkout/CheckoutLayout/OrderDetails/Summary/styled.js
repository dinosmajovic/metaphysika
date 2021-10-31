import styled from 'styled-components';
import { colors } from 'styles';

export const SummaryContainer = styled.div`
  border: solid 1px ${colors.gray.light};
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 40px;
  border-radius: 7px;
  width: 100%;

  > h1 {
    font-size: 22px;
    margin-bottom: 50px;
  }

  > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 5px;
    border-bottom: ${({ type }) =>
      type === 'subTotal' ? `solid 1px ${colors.gray.light}` : ''};

    :not(:last-child) {
      margin-bottom: 4%;
    }

    > span {
      font-size: ${({ type }) => (type === 'subTotal' ? '20px' : '18px')};
    }
  }
`;

export const Total = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom: solid 1px ${colors.gray.light};

  > span {
    color: ${colors.pink.dark};
    display: bloc;
    font-size: 22px;
  }
`;
