import styled from 'styled-components';
import { colors } from 'styles/index';
import fonts from 'assets/fonts';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Table = styled.table`
  > tr {
    > td {
      padding: 30px;
      font-weight: ${fonts.sfPro.fontWeight.semibold};
    }
  }
`;

export const ShoesTable = styled.div`
  padding: 20px;

  > span {
    font-weight: ${fonts.sfPro.fontWeight.semibold};
  }
`;

export const Description = styled.span`
  padding: 20px;
  font-size: 20px;
  color: ${colors.pink.primary};
`;

export const ClothesTable = styled.div`
  padding: 20px;

  > span {
    font-weight: ${fonts.sfPro.fontWeight.semibold};
  }
`;

export const Text = styled.div`
  > span {
    display: block;
    padding: 20px;
    font-weight: ${fonts.sfPro.fontWeight.semibold};
  }

  > ul {
    padding: 10px 20px;

    > span {
      display: block;
      margin-bottom: 10px;
      font-weight: ${fonts.sfPro.fontWeight.semibold};
    }

    > li {
      :not(:last-child) {
        margin-bottom: 5px;
      }
    }
  }
`;
