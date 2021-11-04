import { Link } from 'react-router-dom';
import styled from 'styled-components';
import fonts from 'assets/fonts';
import { colors } from 'styles';

export const SidebarWrapper = styled.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  width: 250px;

  @media (max-width: 1024px) {
    justify-self: center;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.span`
  align-self: flex-end;
  margin-top: 16px;

  /* @media (max-width: 1150px) {
    align-self: unset;
  }

  @media (max-width: 670px) {
    display: none;
  } */
`;

export const SubcategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubcategoriesTitle = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  > span {
    font-size: 15px;
    font-weight: ${fonts.sfPro.fontWeight.semibold};

    /* @media (max-width: 1150px) {
      font-size: 20px;
    } */
  }

  > div {
    width: 15px;
    height: 15px;
  }

  /* @media (max-width: 1150px) {
    align-self: unset;
    display: flex;
    flex-direction: column;
    width: 200px;
    padding: 10px;
  } */
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #212121;
  margin-top: 5px;
  margin-bottom: 15px;

  /* 
  @media (max-width: 1150px) {
    display: none;
  } */
`;

export const Subcategories = styled.div`
  width: 100%;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;

  /* @media (max-width: 1150px) {
    align-self: unset;
    flex-direction: row;

    > :not(:last-child) {
      margin-right: 15px;
    }
  }
  @media (max-width: 480px) {
    flex-wrap: wrap;
  } */
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: fit-content;
`;

export const SubCategory = styled.span`
  text-decoration: none;
  display: block;
  margin-bottom: 7px;

  font-size: 16px;
  color: ${({ isClicked }) =>
    isClicked ? `${colors.pink.primary}` : undefined};

  :hover {
    color: ${colors.pink.primary};
  }

  /* @media (max-width: 1150px) {
    font-size: 17px;
  }

  @media (max-width: 480px) {
    display: block;
    margin-bottom: 7px;
  } */
`;

export const MobileFilters = styled.div`
  background-color: white;
  border-left: 1px solid ${colors.gray.light};
  position: fixed;
  width: 65%;
  height: 100vh;
  top: 0px;
  right: 0px;
  z-index: 40;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;

export const FilterButton = styled.div`
  display: none;
  align-self: center;
  background-color: ${colors.pink.primary};
  color: white;

  padding: 10px 50px;
  border-radius: 5px;

  :active,
  :focus {
    background-color: ${colors.pink.dark};
  }

  /* @media (max-width: 670px) {
    display: block;
  } */
`;

export const ApplyFiltersButton = styled.div`
  background-color: ${colors.pink.primary};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;

  :active,
  :focus {
    background-color: ${colors.pink.dark};
  }

  /* @media (max-width: 370px) {
    font-size: 14px;
  } */
`;
