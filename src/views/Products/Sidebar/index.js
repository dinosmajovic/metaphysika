import {
  SidebarWrapper,
  ButtonWrapper,
  Subcategories,
  SubCategory,
  Line,
  SubcategoriesTitle,
  StyledLink,
  SubcategoriesWrapper,
  MobileFilters,
  FilterButton,
  ApplyFiltersButton
} from './styled';
import Button from 'components/atoms/Button';
import Filters from '../Filters';
import { useState, useEffect } from 'react';
import Backdrop from 'components/atoms/Backdrop/';
import { useParams } from 'react-router-dom';

const Sidebar = ({
  onApplyFilters,
  subcategories,
  setSubcategories,
  allFilters,
  setAllFilters,
  passedInFilters
}) => {
  const [isMobileFiltersMenu, setIsMobileFiltersMenu] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({});
  const { categoryName } = useParams();

  useEffect(() => {
    setAppliedFilters(passedInFilters);
  }, [passedInFilters]);

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
    const newSubCategories = subcategories.map((subcategory) => {
      return {
        ...subcategory,
        isClicked: false
      };
    });
    const index = newSubCategories.findIndex((subcategory) => {
      return subcategory.path === path;
    });

    newSubCategories[index].isClicked = true;
    setSubcategories(newSubCategories);
  };

  const onCloseFiltersMenu = () => {
    setIsMobileFiltersMenu(false);
  };

  const onOpenFilterMenu = () => {
    setIsMobileFiltersMenu(true);
  };

  return (
    <SidebarWrapper>
      {isMobileFiltersMenu && <Backdrop onBackdropClick={onCloseFiltersMenu} />}
      <MobileFilters isOpen={isMobileFiltersMenu}>
        <Filters
          setAllFilters={setAllFilters}
          allFilters={allFilters}
          onSelectFilter={onSelectFilter}
          appliedFilters={appliedFilters}
          areMobileFilters={true}
        />
        <ApplyFiltersButton onClick={() => onApplyFilters(appliedFilters)}>
          APPLY FILTERS
        </ApplyFiltersButton>
      </MobileFilters>
      <Filters
        setAllFilters={setAllFilters}
        allFilters={allFilters}
        onSelectFilter={onSelectFilter}
        appliedFilters={appliedFilters}
        areMobileFilters={false}
      />
      <ButtonWrapper>
        <Button onClick={() => onApplyFilters(appliedFilters)}>
          Apply filter
        </Button>
      </ButtonWrapper>
      <FilterButton onClick={onOpenFilterMenu}>FILTER</FilterButton>
      {subcategories ? (
        <SubcategoriesWrapper>
          <SubcategoriesTitle>
            <span>SUBCATEGORIES</span>
            <Line />
          </SubcategoriesTitle>
          <Subcategories>
            {subcategories?.map((subcategory) => {
              return (
                <StyledLink
                  to={`/categories/${categoryName}/${subcategory.path}`}
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
        </SubcategoriesWrapper>
      ) : null}
    </SidebarWrapper>
  );
};

export default Sidebar;
