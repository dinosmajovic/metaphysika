import styled from 'styled-components';
import Categories from './Categories';
import BrandsDropdown from './BrandsDropdown';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import findItemIndex from 'constants/findItemIndex/index';
import axios from 'axios';
import { errorPath } from 'constants/routes';

const BottomNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    display: none;
  }
`;

const BottomNavigation = ({ categories, brands }) => {
  const history = useHistory();
  const [isCheckoutPage, setIsCheckoutPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsCheckoutPage(location.pathname.includes('checkout'));
  }, [location.pathname]);

  // const goToCategory = (categoryPath) => {
  //   history.push(`/categories/${categoryPath}`);
  // };

  return (
    <BottomNavigationContainer>
      {!isCheckoutPage && (
        <>
          <BrandsDropdown brands={brands} />
          <Categories categories={categories} />
        </>
      )}
    </BottomNavigationContainer>
  );
};

export default BottomNavigation;
