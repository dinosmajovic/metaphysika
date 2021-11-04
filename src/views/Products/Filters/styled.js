import styled from 'styled-components';
import fonts from 'assets/fonts';
import { colors } from 'styles';

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;

  /* @media (max-width: 1150px) {
    flex-direction: row;
    justify-content: center;
  }

  @media (max-width: 670px) {
    display: ${({ areMobileFilters }) => (areMobileFilters ? 'block' : 'none')};
    width: 80%;
  } */
`;

export const FilterWrapper = styled.div`
  margin-bottom: 10px;
  position: relative;
  width: 100%;

  /* @media (max-width: 1150px) {
    width: 200px;
  }

  :not(:last-child) {
    margin-right: 10px;
  }

  @media (max-width: 670px) {
    width: 100%;

    :not(:last-child) {
      margin-right: 0px;
    }
  } */
`;

export const FilterHeader = styled.div`
  user-select: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  border-bottom: 1px solid ${colors.gray.text};

  > span {
    font-size: 14px;
    font-weight: ${fonts.sfPro.fontWeight.semibold};

    /* @media (max-width: 1150px) {
      color: white;
    }

    @media (max-width: 670px) {
      color: inherit;
      width: 100%;
      padding: 5px;
      border-bottom: 1px solid black;
    } */
  }

  > div {
    display: flex;
    height: 15px;
    width: 15px;

    /* @media (max-width: 1150px) {
      display: none;
    }

    @media (max-width: 670px) {
      display: none;
    } */
  }
  /* 
  @media (max-width: 1150px) {
    border-bottom: none;
    background-color: ${colors.pink.primary};
    justify-content: center;
    border-radius: 5px;
    border-bottom-left-radius: ${({ isOpen }) => (isOpen ? '0px' : '5px')};
    border-bottom-right-radius: ${({ isOpen }) => (isOpen ? '0px' : '5px')};
  }

  @media (max-width: 670px) {
    border-bottom: 0px;
    background-color: inherit;
    justify-content: center;
  } */
`;

export const FilterItems = styled.div`
  margin-top: 15px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

  /* @media (max-width: 1150px) {
    position: absolute;
    z-index: 14;
    width: 100%;
    background-color: white;
    border: 1px solid ${colors.gray.light};
    border-radius: 5px;
    box-shadow: 6px 6px 12px ${colors.gray.light};
    top: 12px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-top-color: white;
  }

  @media (max-width: 670px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: unset;
    z-index: 14;
    width: 100%;
    background-color: inherit;
    border: 0px;
    box-shadow: none;
    flex-direction: column;
    max-height: 122px;
    overflow-x: hidden;
    overflow-y: scroll;
  } */
`;

export const FilterItem = styled.div`
  display: flex;
  padding-left: 15px;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  padding: 3px;

  :hover {
    background-color: rgba(0, 0, 0, 0.03);
    /* 
    @media (max-width: 1150px) {
      background-color: inherit;
    } */
  }

  > span {
    font-size: 14px;
    cursor: pointer;
  }

  /* @media (max-width: 1150px) {
    padding: 8px;
  } */
`;

export const Checkbox = styled.div`
  width: 15px;
  height: 15px;
  border: 1px solid black;
  margin-right: 5px;
  display: flex;
  justify-content: center;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
