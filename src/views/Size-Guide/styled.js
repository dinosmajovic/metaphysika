import styled from 'styled-components';
import { colors } from 'styles/index';
import fonts from 'assets/fonts';

export const Container = styled.div`
  width: 100%;

  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
`;

export const TablesWrapper = styled.div`
  display: flex;

  @media (max-width: 600px) {
    justify-self: center;
    flex-direction: column-reverse;
  }
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.gray.light};

  > span {
    align-self: center;
    justify-content: center;
    font-size: 20px;
    padding: 10px;
  }

  :first-child {
    margin-right: 30px;

    @media (max-width: 600px) {
      align-items: center;
      margin-right: 0px;
    }
  }

  @media (max-width: 600px) {
    margin-top: 20px;
    margin-right: 0px;
    width: 100%;
  }
`;

export const Table = styled.table`
  text-align: left;

  margin: 10px 0px;
  padding: 10px;

  > thead > tr {
    > th {
      color: ${colors.pink.primary};
      font-size: 20px;
      padding: 0px 10px;

      @media (max-width: 600px) {
        font-size: 18px;
      }
    }
  }

  > tbody > tr {
    > td {
      font-size: 18px;
      padding: 10px;

      @media (max-width: 600px) {
        font-size: 16px;
      }
    }
  }
`;

export const Hr = styled.div`
  width: 100%;
  border-bottom: 1px solid ${colors.gray.light};
`;

export const Text = styled.div`
  width: fit-content;
  justify-self: center;
  align-self: center;
  margin-top: 20px;

  > span {
    display: block;
    font-weight: ${fonts.sfPro.fontWeight.semibold};

    :not(:last-child) {
      margin-bottom: 10px;
    }
  }

  > ul {
    padding: 20px;

    > li {
      :not(:last-child) {
        margin-bottom: 5px;
      }
    }
  }
`;
