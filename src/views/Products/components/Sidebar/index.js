import { useState, useEffect } from 'react';
import { SidebarWrapper, ButtonWrapper } from './styled';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import history from 'routing/history';
import Button from 'components/atoms/Button';

import Filters from '../Filters';

const FILTERS = [
  {
    name: 'size',
    label: 'SIZE',
    filters: [44, 45, 46]
  },
  {
    name: 'brand',
    label: 'BRAND',
    filters: [44, 45, 46]
  },
  {
    name: 'color',
    label: 'COLOR',
    filters: [44, 45, 46]
  }
];

const Sidebar = ({ onApplyFilter }) => {
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

  return (
    <SidebarWrapper>
      <Filters
        filters={FILTERS}
        appliedFilters={appliedFilters}
        onSelectFilter={onSelectFilter}
      />

      <ButtonWrapper>
        <Button isClicked={() => onApplyFilter(appliedFilters)}>Apply filter</Button>
      </ButtonWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;
