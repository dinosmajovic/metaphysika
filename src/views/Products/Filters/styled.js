import styled from 'styled-components';
import fonts from 'assets/fonts';
import { colors } from 'styles';

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterWrapper = styled.div`
  margin-bottom: 10px;
  position: relative;
  width: 100%;
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
  }

  > div {
    display: flex;
    height: 15px;
    width: 15px;
  }
`;

export const FilterItems = styled.div`
  margin-top: 15px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
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
  }

  > span {
    font-size: 14px;
    cursor: pointer;
  }
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
