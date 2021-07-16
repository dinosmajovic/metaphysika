import styled from 'styled-components';
import fonts from 'assets/fonts';
import { colors } from 'styles';

export const SidebarWrapper = styled.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  > span {
    font-size: 14px;
    font-weight: ${fonts.sfPro.fontWeight.semibold};
  }

  > div {
    display: flex;
    height: 15px;
    width: 15px;
  }
`;
export const Line = styled.div`
  height: 1px;
  background-color: ${colors.gray.text};
  width: 250px;
  margin-bottom: 15px;
`;

export const FilterOptions = styled.div`
  margin-bottom: 15px;
  padding-left: 10px;
  display: none;
  display: block;
  display: ${({ isOpened }) => (isOpened ? 'block' : 'none')};

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    :not(:last-child) {
      margin-bottom: 5px;
    }

    > span {
      font-size: 14px;
      cursor: pointer;
    }
  }
`;

export const Checkbox = styled.div`
  width: 13px;
  height: 13px;
  border: 1px solid black;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ButtonWrapper = styled.span`
  align-self: flex-end;
  margin-top: 10px;
`;
