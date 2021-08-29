import { Link } from 'react-router-dom';
import styled from 'styled-components';
import fonts from 'assets/fonts';
import { colors } from 'styles';

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

export const SubcategoriesTitle = styled.span`
  margin-top: 20px;
  margin-bottom: 2px;
  font-size: 16px;
  font-weight: ${fonts.sfPro.fontWeight.medium};
  align-self: flex-start;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #212121;
  margin-bottom: 7px;
`;

export const Subcategories = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const SubCategory = styled.span`
  text-decoration: none;
  font-size: 15px;
  color: ${({ isClicked }) =>
    isClicked ? `${colors.pink.primary}` : undefined};

  :hover {
    color: ${colors.pink.primary};
  }
  :not(:last-child) {
    margin-bottom: 7px;
  }
`;
