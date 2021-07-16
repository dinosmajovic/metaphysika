import {
  SidebarWrapper,
  Filter,
  Line,
  FilterOptions,
  Checkbox,
  ButtonWrapper
} from './styled';
import closePinkIcon from 'assets/icons/closePink.svg';
import plus from 'assets/icons/plus.svg';
// import Button from 'components/atoms/Button';

import Filters from '../Filters';

const Sidebar = ({ filters, clicked, onCheck, onApplyFilter }) => {
  return (
    <SidebarWrapper>
      {filters.map((filter) => {
        return (
          <div key={filter.label}>
            <Filter onClick={() => clicked(filter.label)}>
              <span>{filter.label}</span>
              <div>
                <img src={plus} alt="+" />
              </div>
            </Filter>
            <Line />
            <FilterOptions isOpened={filter.isOpened}>
              {filter.values.map((value) => {
                return (
                  <div
                    key={value.label}
                    onClick={() => onCheck(value.label, filter.label)}
                  >
                    <Checkbox>{value.isChecked && <img src={closePinkIcon} />}</Checkbox>
                    <span>{value.label}</span>
                  </div>
                );
              })}
            </FilterOptions>
          </div>
        );
      })}

      <Filters />

      {/* <ButtonWrapper>
        <Button isClicked={onApplyFilter}>Apply filter</Button>
      </ButtonWrapper> */}
    </SidebarWrapper>
  );
};

export default Sidebar;
