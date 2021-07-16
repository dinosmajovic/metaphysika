import React from 'react';
import styled from 'styled-components';

const CategoriesContainer = styled.div`
  > span {
    :not(:last-child) {
      margin-right: 40px;
    }
  }
`;

const Categories = () => {
  return (
    <CategoriesContainer>
      <span>Shoes</span>
      <span>Clothes</span>
    </CategoriesContainer>
  );
};

export default Categories;
