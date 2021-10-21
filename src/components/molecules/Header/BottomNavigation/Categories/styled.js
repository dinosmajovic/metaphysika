import styled from 'styled-components';
import { colors } from 'styles';
import fonts from 'assets/fonts';
import { Link } from 'react-router-dom';

export const CategoriesContainer = styled.div``;

export const CategoryItem = styled(Link)`
  font-size: 18px;
  cursor: pointer;
  font-weight: ${fonts.sfPro.fontWeight.regular};
  text-decoration: none;

  :active,
  :hover {
    color: ${colors.pink.primary};
  }

  :not(:last-child) {
    margin-right: 45px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
