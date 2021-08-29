import styled from 'styled-components';
import { colors } from 'styles';

export const ButtonsWrapper = styled.div`
  grid-area: buttons;
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    font-size: 12px;
    cursor: pointer;

    :not(:last-child) {
      margin-right: 10px;
    }

    :not(:first-child) {
      margin-left: 10px;
    }
  }
`;

export const Button = styled.div`
  margin-right: 15px;
  width: 31px;
  height: 31px;
  border: 1px solid ${colors.pink.primary};
  background-color: ${({ isClicked }) =>
    isClicked ? `${colors.pink.primary} ` : `${colors.white.primary}`};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  > span {
    font-size: 12px;
    /* color: ${colors.pink.primary}; */
    color: ${({ isClicked }) =>
      isClicked ? `${colors.white.primary}` : `${colors.pink.primary}`};
  }
`;

// isClicked
