import styled from 'styled-components';
import { colors } from 'styles';
import fonts from 'assets/fonts';

export const CategoriesContainer = styled.div`
  > span {
    :not(:last-child) {
      margin-right: 40px;
    }
  }
`;

export const CategoryItem = styled.span`
  font-size: 18px;
  cursor: pointer;
  font-weight: ${fonts.sfPro.fontWeight.regular};

  padding-bottom: ${({ isClicked }) => (isClicked ? ` 2px` : '')};
  border-bottom: ${({ isClicked }) =>
    isClicked ? ` 1px solid ${colors.pink.primary}` : ''};
  color: ${({ isClicked }) => (isClicked ? `${colors.pink.primary}` : '')};
  text-decoration: none;

  :not(:last-child) {
    margin-right: 45px;
  }
`;
