import styled from 'styled-components';
import { colors } from 'styles';
import fonts from 'assets/fonts';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.gray.light};
  position: fixed;
  z-index: 50;

  > :first-child {
    font-size: 50px;
    color: ${colors.pink.primary};
  }

  > :nth-child(2) {
    font-size: 30px;
    font-weight: ${fonts.sfPro.fontWeight.regular};
    color: ${colors.pink.primary};
  }

  > p {
    font-size: 20px;
    margin: 20px 0px;
    font-weight: ${fonts.sfPro.fontWeight.regular};
  }
`;
