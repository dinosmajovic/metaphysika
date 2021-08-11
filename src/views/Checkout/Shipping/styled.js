import styled from 'styled-components';
import { colors } from 'styles';
import fonts from 'assets/fonts';

export const Container = styled.div`
  > h1 {
    font-size: 25px;
    margin-bottom: 5px;
  }

  @media (max-width: 960px) {
    width: 55%;
  }

  @media (max-width: 770px) {
    width: 80%;
  }
`;

export const RegisteredUser = styled.span`
  font-size: 16px;
  font-weight: ${fonts.sfPro.fontWeight.light};
  color: ${colors.gray.textLight};

  > span {
    margin-left: 7px;
    color: ${colors.pink.dark};
    font-weight: ${fonts.sfPro.fontWeight.light};
    border-bottom: 1px solid ${colors.pink.dark};
    cursor: pointer;

    :not(:last-child) {
      margin-right: 7px;
    }
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  > :not(:last-child) {
    margin-right: 20px;
  }
`;
