import { useState } from 'react';
import {
  FiltersContainer,
  FilterWrapper,
  FilterHeader,
  FilterItems,
  FilterItem,
  Checkbox
} from './styled';
import plus from 'assets/icons/plus.svg';
import closePinkIcon from 'assets/icons/closePink.svg';

const Filter = ({ label, filters, onSelectFilter }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FilterWrapper>
      <FilterHeader onClick={() => setIsOpen(!isOpen)}>
        <span>{label}</span>
        <div>
          <img src={plus} alt="+" />
        </div>
      </FilterHeader>

      <FilterItems isOpen={isOpen}>
        {filters.map((filter, index) => (
          <FilterItem key={index} onClick={() => onSelectFilter(filter)}>
            <Checkbox>
              <img src={closePinkIcon} alt="x" />
            </Checkbox>
            <span>{filter}</span>
          </FilterItem>
        ))}
      </FilterItems>
    </FilterWrapper>
  );
};

const Filters = () => {
  return (
    <FiltersContainer>
      <Filter
        name="color"
        label="color"
        filters={[44, 45, 46]}
        onSelectFilter={(filter) => console.log(filter)}
      />
    </FiltersContainer>
  );
};

export default Filters;
