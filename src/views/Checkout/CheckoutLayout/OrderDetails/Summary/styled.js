import styled from 'styled-components';
import { colors } from 'styles';

export const SummaryContainer = styled.div`
  border: solid 1px ${colors.gray.light};
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border-radius: 7px;
  width: 100%;

  > h1 {
    font-size: 22px;
    margin-bottom: 50px;
  }

  > div {
    display: flex;
    align-items: center;
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

  @media (max-width: 450px) {
    padding: 20px;
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

export const Euro = styled.span`
  margin: 0px auto;
  width: fit-content;
  margin-top: 12px;
  font-size: 18px;
  color: ${colors.pink.dark};
`;

export const Vat = styled.div`
  font-size: 12px;
  color: ${colors.pink.dark};
`;
