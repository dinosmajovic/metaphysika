import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from 'styles';
import fonts from 'assets/fonts';

const CategoriesContainer = styled.div`
  > span {
    :not(:last-child) {
      margin-right: 40px;
    }
  }
`;

const CategoryItem = styled.span`
  font-size: 18px;
  cursor: pointer;
  font-weight: ${fonts.sfPro.fontWeight.regular};

 padding-bottom: ${({ isClicked }) => (isClicked ? ` 2px` : 'none')};
  border-bottom: ${({ isClicked }) =>
    isClicked ? ` 1px solid ${colors.pink.primary}` : 'none'};
  color: ${({ isClicked }) => (isClicked ? `${colors.pink.primary}` : 'none')};

  :not(:last-child) {
    margin-right: 45px;
  }
`;



const Categories = () => {

  const [categories, setCategories] = useState([
    {
      label: 'Shoes',
      isClicked: false
    },
    {
      label: 'Clothes',
      isClicked: false
    },
  
  ])
  return (
    <CategoriesContainer>
     {categories.map(category => 
      <CategoryItem key={category.label}>{category.label}</CategoryItem>
     )}
    </CategoriesContainer>
  );
};

export default Categories;
