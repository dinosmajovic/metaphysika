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
  onOpenFilterMenu,
  onSelectFilterValue,
  appliedFilter
}) => {
  return (
    <FilterWrapper>
      <FilterHeader
        onClick={() => onOpenFilterMenu(filter.name)}
        isOpen={filter.isOpen}
      >
        <span>{filter.name}</span>
        <div>
          <img src={plus} alt="icon" />
        </div>
      </FilterHeader>
      <FilterItems isOpen={filter.isOpen}>
        {filter.values.map((filterValue) => {
          return (
            <FilterItem
              key={filterValue}
              onClick={() => onSelectFilterValue(filter.label, filterValue)}
            >
              <Checkbox>
                {appliedFilter?.includes(filterValue) && (
                  <img src={closePinkIcon} alt="x" />
                )}
              </Checkbox>
              <span>{filterValue}</span>
            </FilterItem>
          );
        })}
      </FilterItems>
    </FilterWrapper>
  );
};

const Filters = ({
  filters,
  setFilters,
  appliedFilters,
  setAppliedFilters,
  queries
}) => {
  const onSelectFilterValue = (filterName, value) => {
    let newAppliedFilters = { ...appliedFilters };
    if (newAppliedFilters[filterName]?.includes(value)) {
      const index = newAppliedFilters[filterName].indexOf(value);
      newAppliedFilters[filterName].splice(index, 1);
    } else if (newAppliedFilters[filterName]) {
      newAppliedFilters[filterName] = [...newAppliedFilters[filterName], value];
    } else {
      newAppliedFilters[filterName] = [value];
    }

    setAppliedFilters(newAppliedFilters);
  };

  const onOpenFilterMenu = (name) => {
    const index = filters.findIndex((f) => f.name === name);
    const newFilters = [...filters];
    newFilters[index].isOpen = !newFilters[index].isOpen;
    setFilters(newFilters);
  };

  return (
    <FiltersContainer>
      {filters?.map((filter) => {
        const label = filter.label;

        return (
          <Filter
            key={filter.name}
            name={filter.name}
            filter={filter}
            onOpenFilterMenu={onOpenFilterMenu}
            onSelectFilterValue={onSelectFilterValue}
            appliedFilters={appliedFilters}
            appliedFilter={appliedFilters[label]}
            queries={queries}
          />
        );
      })}
    </FiltersContainer>
  );
};

export default Filters;
