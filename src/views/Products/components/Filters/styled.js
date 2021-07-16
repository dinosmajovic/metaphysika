import styled from 'styled-components';
import fonts from 'assets/fonts';
import { colors } from 'styles';

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterWrapper = styled.div``;

export const FilterHeader = styled.div`
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
  margin: 15px 0;
  padding-left: 10px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

export const FilterItem = styled.div`
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
