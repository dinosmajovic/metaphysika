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
  z-index: 15;

  > h1 {
    font-size: 25px;
    font-weight: ${fonts.sfPro.fontWeight.regular};
  }
`;

export const SortOptions = styled.div`
  position: absolute;
  z-index: 10;
  top: 28px;
  width: 100%;
  border: 1px solid ${colors.gray.light};
  display: flex;
  flex-direction: column;
  background-color: ${colors.white.primary};
  border-radius: 3px;
  display: none;

  > :not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const SortOption = styled.span`
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
  color: ${({ isClicked }) => (isClicked ? `${colors.pink.primary}` : null)};
  background-color: ${({ isClicked }) =>
    isClicked ? `${colors.gray.hover}` : null};

  :hover,
  :active,
  :focus {
    background-color: ${colors.gray.hover};
    color: ${colors.pink.primary};
  }
`;

export const SortContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  :hover {
    > ${SortOptions} {
      display: flex;
    }
  }

  @media (max-width: 330px) {
    margin-left: 30px;
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

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
