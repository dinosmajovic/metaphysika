import React from 'react';
import styled from 'styled-components';
import Categories from './Categories';
import BrandsDropdown from './BrandsDropdown';

const BottomNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BottomNavigation = () => {
  return (
    <BottomNavigationContainer>
      <BrandsDropdown />
      <Categories />
    </BottomNavigationContainer>
  );
};

export default BottomNavigation;
