import fonts from 'assets/fonts/index';
import styled from 'styled-components';
import { colors } from 'styles';

export const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid ${colors.gray.light};

  > h1 {
    font-size: 18px;
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const SummaryItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;

  > span {
    font-size: ${({ type }) => (type === 'total' ? '18px' : '16px')};
    font-weight: ${({ type }) =>
      type === 'total'
        ? `${fonts.sfPro.fontWeight.medium}`
        : `${fonts.sfPro.fontWeight.regular}`};
  }

  margin-bottom: 10px;

  > :first-child {
    margin-right: 50px;
  }

  > :nth-child(2) {
  }
`;
