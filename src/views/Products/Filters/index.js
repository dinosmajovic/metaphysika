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

const Filter = ({
  filter,
  label,
  filters,
  onSelectFilter,
  appliedFilter,
  allFilters,
  setAllFilters
}) => {
  const onFilterSelect = (label) => {
    const filterIndex = allFilters.findIndex((f) => f.label === label);

    const newFilters = [...allFilters];
    newFilters[filterIndex].isOpen = !newFilters[filterIndex].isOpen;

    setAllFilters(newFilters);
  };

  return (
    <FilterWrapper className="sidebar">
      <FilterHeader
        onClick={() => onFilterSelect(label)}
        className="sidebar"
        isOpen={filter.isOpen}
      >
        <span className="sidebar">{label}</span>
        <div className="sidebar">
          <img src={plus} alt="+" className="sidebar" />
        </div>
      </FilterHeader>

      <FilterItems isOpen={filter.isOpen} className="sidebar">
        {filters.map((filter, index) => (
          <FilterItem
            key={index}
            onClick={() => onSelectFilter(filter)}
            className="sidebar"
          >
            <Checkbox className="sidebar">
              {appliedFilter?.includes(filter) && (
                <img src={closePinkIcon} alt="x" className="sidebar" />
              )}
            </Checkbox>
            <span className="sidebar">{filter}</span>
          </FilterItem>
        ))}
      </FilterItems>
    </FilterWrapper>
  );
};

const Filters = ({
  appliedFilters,
  onSelectFilter,
  setAllFilters,
  allFilters,
  areMobileFilters
}) => {
  return (
    <FiltersContainer areMobileFilters={areMobileFilters}>
      {allFilters?.map((filter) => (
        <Filter
          allFilters={allFilters}
          setAllFilters={setAllFilters}
          filter={filter}
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
