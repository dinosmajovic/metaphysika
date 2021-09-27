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

const BottomNavigation = () => {
  const [categories, setCategories] = useState(null);
  const [brands, setBrands] = useState(null);
  const [loading, setLoading] = useState(true);
  const [brandIsClicked, setBrandIsClicked] = useState(false);
  const history = useHistory();
  const [isCheckoutPage, setIsCheckoutPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsCheckoutPage(location.pathname.includes('checkout'));
    if (!location.pathname.includes('/brands')) {
      const newBrands = brands?.map((category) => {
        return {
          ...category,
          isClicked: false
        };
      });

      setBrandIsClicked(false);
      setBrands(newBrands);
    }
    if (!location.pathname.includes('/categories')) {
      const newCategories = categories?.map((category) => {
        return {
          ...category,
          isClicked: false
        };
      });

      setCategories(newCategories);
    }
  }, [location.pathname]);

  useEffect(() => {
    getBrandsAndCategories();
  }, []);

  const getBrandsAndCategories = async () => {
    setLoading(true);
    await axios
      .get('/categories')
      .then((result) => {
        const mappedCategories = result.data.map((category) => {
          return {
            label: category.name,
            path: category.path,
            isClicked: false
          };
        });
        setCategories(mappedCategories);
      })
      .catch((error) => {
        history.push(errorPath);
      });

    await axios
      .get('/brands')
      .then((result) => {
        const mappedBrands = result.data.map((brand) => {
          return {
            label: brand.name,
            path: brand.path,
            isClicked: false
          };
        });
        setBrands(mappedBrands);
      })
      .catch((error) => {
        history.push(errorPath);
      });

    setLoading(false);
  };

  const getCategories = async () => {
    axios
      .get('/categories')
      .then((result) => {
        const mappedCategories = result.data.map((category) => {
          return {
            label: category.name,
            path: category.path,
            isClicked: false
          };
        });

        setCategories(mappedCategories);
      })
      .catch((error) => {
        history.push(errorPath);
      });
  };

  const getBrands = async () => {
    axios
      .get('/brands')
      .then((result) => {
        const mappedBrands = result.data.map((brand) => {
          return {
            label: brand.name,
            path: brand.path,
            isClicked: false
          };
        });
        setBrands(mappedBrands);
      })
      .catch((error) => {
        history.push(errorPath);
      });
  };

  const resetItems = (items) => {
    return items.map((item) => {
      return {
        ...item,
        isClicked: false
      };
    });
  };

  const goToCategory = (categoryId, categoryPath) => {
    const categoryIndex = findItemIndex(categories, categoryId);
    const newCategories = resetItems(categories);
    newCategories[categoryIndex].isClicked = true;

    setBrandIsClicked(false);
    setBrands(resetItems(brands));
    setCategories(newCategories);
    history.push(`/categories/${categoryPath}`);
  };

  const goToBrand = (brandId, brandPath) => {
    const brandIndex = findItemIndex(brands, brandId);
    const newBrands = resetItems(brands);

    newBrands[brandIndex].isClicked = true;

    setBrandIsClicked(true);
    setCategories(resetItems(categories));
    setBrands(newBrands);
    history.push(brandPath);
  };

  if (loading) {
    return null;
  } else {
    return (
      <BottomNavigationContainer>
        {!isCheckoutPage && (
          <>
            <BrandsDropdown
              brandIsClicked={brandIsClicked}
              onBrandClick={goToBrand}
              brands={brands}
            />
            <Categories
              onCategoryClick={goToCategory}
              categories={categories}
            />
          </>
        )}
      </BottomNavigationContainer>
    );
  }
};

export default BottomNavigation;
