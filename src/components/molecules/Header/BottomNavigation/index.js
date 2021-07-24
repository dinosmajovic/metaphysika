import styled from 'styled-components';
import Categories from './Categories';
import BrandsDropdown from './BrandsDropdown';
import { useEffect, useState } from 'react';
import client from 'api/apollo-client';
import { useHistory } from 'react-router-dom';
import { errorPath } from 'constants/routes';
import findItemIndex from 'constants/findItemIndex/index';
import GET_BRANDS_AND_CATEGORIES from 'queries/get_brands_and_categories';

const BottomNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BottomNavigation = () => {
  const [categories, setCategories] = useState(null);
  const [brands, setBrands] = useState(null);
  const [loading, setLoading] = useState(true);
  const [brandIsClicked, setBrandIsClicked] = useState(false);
  const history = useHistory();

  useEffect(() => {
    getBrandsAndCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBrandsAndCategories = async () => {
    try {
      await client
        .query({
          query: GET_BRANDS_AND_CATEGORIES
        })
        .then((result) => {
          const mappedCategories = result.data.site.categoryTree.map(
            (category) => {
              return {
                label: category.name,
                path: category.path,
                isClicked: false
              };
            }
          );

          const mappedBrands = result.data.site.brands.edges.map((brand) => {
            return {
              label: brand.node.name,
              path: brand.node.path,
              isClicked: false
            };
          });

          setBrands(mappedBrands);
          setCategories(mappedCategories);
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
      return history.push(errorPath);
    }
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
    history.push(categoryPath);
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
  return (
    <BottomNavigationContainer>
      <BrandsDropdown
        brandIsClicked={brandIsClicked}
        onBrandClick={goToBrand}
        brands={brands}
        loading={loading}
      />
      <Categories
        onCategoryClick={goToCategory}
        categories={categories}
        loading={loading}
      />
    </BottomNavigationContainer>
  );
};

export default BottomNavigation;
