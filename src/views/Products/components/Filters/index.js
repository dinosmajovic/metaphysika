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

const Filter = ({ label, name, filters, onSelectFilter, appliedFilter }) => {
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
              {appliedFilter?.includes(filter) && (
                <img src={closePinkIcon} alt="x" />
              )}
            </Checkbox>
            <span>{filter}</span>
          </FilterItem>
        ))}
      </FilterItems>
    </FilterWrapper>
  );
};

const Filters = ({ filters, appliedFilters, onSelectFilter }) => {
  return (
    <FiltersContainer>
      {filters?.map((filter) => (
        <Filter
          key={filter.label}
          label={filter.label}
          name={filter.name}
          filters={filter.filters}
          onSelectFilter={(f) => onSelectFilter(filter.name, f)}
          appliedFilter={appliedFilters?.[filter.name]}
        />
      ))}
    </FiltersContainer>
  );
};

export default Filters;
