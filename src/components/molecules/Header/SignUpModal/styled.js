import styled from 'styled-components';
import fonts from 'assets/fonts';
import { colors } from 'styles';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: ${colors.white.primary};
  z-index: 40;
  position: fixed;
  padding: 40px;
  border-radius: 5px;

  > h1 {
    font-size: 30px;
    color: ${colors.gray.textLight};
    margin-bottom: 10px;
  }

  @media (max-width: 500px) {
    padding: 15px;
    height: 100vh;
  }
`;

export const LogIn = styled.span`
  font-size: 16px;
  font-weight: ${fonts.sfPro.fontWeight.light};

  > span {
    font-weight: ${fonts.sfPro.fontWeight.light};
    border-bottom: 1px solid ${colors.pink.dark};
    color: ${colors.pink.dark};
    margin-left: 8px;
    cursor: pointer;

    :active {
      border-bottom: 1px solid ${colors.pink.light};
      color: ${colors.pink.light};
    }
  }
`;
export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    width: calc(50% - 10px);
  }

  > div {
    @media (max-width: 500px) {
      width: calc(50% - 5px);
    }
  }
`;

export const Terms = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 15px;

  > div {
    font-weight: ${fonts.sfPro.fontWeight.light};
  }

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  > span {
    margin-right: 15px;
    cursor: pointer;

    :active {
      color: ${colors.pink.dark};
    }
  }
`;

export const StyledSpan = styled.span`
  text-decoration: none;
  font-weight: ${fonts.sfPro.fontWeight.light};
  color: ${colors.pink.dark};
  margin-left: 5px;
  border-bottom: 1px solid ${colors.pink.dark};
  cursor: pointer;

  :first-child {
    margin-right: 5px;
  }
`;

export const TermsErrorMessage = styled.span`
  position: absolute;

  color: ${colors.pink.primary};
  font-size: 14px;
  bottom: 15px;
  right: 15px;
`;
