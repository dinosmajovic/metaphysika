import styled from 'styled-components';
import Categories from './Categories';
import BrandsDropdown from './BrandsDropdown';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const BottomNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    display: none;
  }
`;

const BottomNavigation = ({ categories, brands }) => {
  const [isCheckoutPage, setIsCheckoutPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsCheckoutPage(location.pathname.includes('checkout'));
  }, [location.pathname]);

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
