import {
  SidebarWrapper,
  ButtonWrapper,
  Subcategories,
  SubCategory,
  Line,
  SubcategoriesTitle,
  StyledLink
} from './styled';
import Button from 'components/atoms/Button';
import Filters from '../Filters';
import { useState } from 'react';

const Sidebar = ({
  onApplyFilters,
  filters,
  categoryName,
  subCategories,
  setSubCategories
}) => {
  const FILTERS = [
    {
      name: 'size',
      label: 'SIZE',
      filters: filters.sizes
    },
    {
      name: 'brand',
      label: 'BRAND',
      filters: filters.brands
    },
    {
      name: 'color',
      label: 'COLOR',
      filters: filters.colors
    }
  ];
  const [appliedFilters, setAppliedFilters] = useState({});

  const onSelectFilter = (name, filter) => {
    let filters = { ...appliedFilters };
    if (filters[name]?.includes(filter)) {
      const index = filters[name].indexOf(filter);
      filters[name].splice(index, 1);
    } else if (filters[name]) {
      filters[name] = [...filters[name], filter];
    } else {
      filters[name] = [filter];
    }

    setAppliedFilters(filters);
  };

  const onSubcategoryClick = (path) => {
    const newSubCategories = subCategories.map((subCategory) => {
      return {
        ...subCategory,
        isClicked: false
      };
    });

    const index = newSubCategories.findIndex((subCategory) => {
      return subCategory.path === path;
    });

    newSubCategories[index].isClicked = true;

    setSubCategories(newSubCategories);
  };

  return (
    <SidebarWrapper>
      <Filters
        filters={FILTERS}
        appliedFilters={appliedFilters}
        onSelectFilter={onSelectFilter}
      />

      <ButtonWrapper>
        <Button onClick={() => onApplyFilters(appliedFilters)}>
          Apply filter
        </Button>
      </ButtonWrapper>

      {categoryName && (
        <>
          <SubcategoriesTitle>SUBCATEGORIES</SubcategoriesTitle>
          <Line />
          <Subcategories>
            {subCategories?.map((subcategory) => {
              return (
                <StyledLink
                  to={subcategory.path}
                  key={subcategory.path}
                  onClick={() => onSubcategoryClick(subcategory.path)}
                >
                  <SubCategory isClicked={subcategory.isClicked}>
                    {subcategory.name}
                  </SubCategory>
                </StyledLink>
              );
            })}
          </Subcategories>
        </>
      )}
    </SidebarWrapper>
  );
};

export default Sidebar;
