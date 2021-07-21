import styled from 'styled-components';
import fonts from 'assets/fonts';
import { colors } from 'styles';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  grid-area: sort;
  width: 100%;
  cursor: pointer;

  > h1 {
    font-size: 25px;
    font-weight: ${fonts.sfPro.fontWeight.regular};
  }
`;

export const SortOptions = styled.div`
  position: absolute;
  z-index: 10;
  top: 29px;
  width: 100%;
  border: 1px solid ${colors.gray.light};
  display: flex;
  flex-direction: column;
  background-color: ${colors.white.primary};
  border-radius: 3px;
  display: none;

  > span {
    padding: 5px;
    font-size: 14px;
    cursor: pointer;

    :hover {
      background-color: ${colors.gray.hover};
      color: ${colors.pink.primary};
    }
  }

  > :not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const SortContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  @media (max-width: 1200px) {
    display: none;
  }

  :hover {
    > ${SortOptions} {
      display: flex;
    }
  }
`;

export const Container = styled.div`
  padding: 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    font-size: 14px;
    font-weight: ${fonts.sfPro.fontWeight.semibold};
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 140px;
  background-color: ${colors.gray.text};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 15px;
  height: 15px;
`;
