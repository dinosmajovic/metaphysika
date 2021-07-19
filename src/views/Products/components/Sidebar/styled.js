import styled from 'styled-components';
// import fonts from 'assets/fonts';
// import { colors } from 'styles';

export const SidebarWrapper = styled.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  width: 250px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const ButtonWrapper = styled.span`
  align-self: flex-end;
  margin-top: 16px;
`;
