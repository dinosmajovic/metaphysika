import styled from 'styled-components';
import { colors } from 'styles';

export const HeaderWrapper = styled.header`
  width: 100%;

  @media (max-width: 1024px) {
    padding: 10px;
    position: relative;
    border-bottom: 1px solid ${colors.gray.light};
  }

  @media (max-width: 400px) {
    display: none;
  }
`;

export const SideMenu = styled.div`
  width: 30%;
  height: 100vh;
  z-index: 20;
  left: 0;
  bottom: 0;
  background-color: yellowgreen;
  position: fixed;
`;
