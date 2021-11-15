import {
  SidebarWrapper,
  ButtonWrapper,
  Subcategories,
  Subcategory,
  Line,
  SubcategoriesTitle,
  StyledLink,
  SubcategoriesWrapper
} from './styled';
import Button from 'components/atoms/Button';
import Filters from '../Filters';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import plus from 'assets/icons/plus.svg';

const Sidebar = ({
  onApplyFilters,
  filters,
  subcategories,
  viewAllPath,
  appliedFilters,
  setAppliedFilters,
  setFilters,
  queries
}) => {
  const { categoryName } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarWrapper>
      <Filters
        setFilters={setFilters}
        filters={filters}
        appliedFilters={appliedFilters}
        setAppliedFilters={setAppliedFilters}
        queries={queries}
      />
      <ButtonWrapper>
        <Button onClick={onApplyFilters}>Apply filter</Button>
      </ButtonWrapper>
      {/* SUBCATEGORIES  MENU V*/}
      {subcategories && (
        <SubcategoriesWrapper>
          <SubcategoriesTitle onClick={() => setIsOpen(!isOpen)}>
            <span>SUBCATEGORIES</span>
            <div>
              <img src={plus} alt="icon" />
            </div>
          </SubcategoriesTitle>
          <Line />
          <Subcategories isOpen={isOpen}>
            {subcategories.map((subcategory) => {
              return (
                <StyledLink
                  to={`/categories/${categoryName}/${subcategory.path}`}
                  key={subcategory.id}
                >
                  <Subcategory>{subcategory.name}</Subcategory>
                </StyledLink>
              );
            })}
            <StyledLink to={viewAllPath}>
              <Subcategory>View all</Subcategory>
            </StyledLink>
          </Subcategories>
        </SubcategoriesWrapper>
      )}
    </SidebarWrapper>
  );
};

export default Sidebar;
