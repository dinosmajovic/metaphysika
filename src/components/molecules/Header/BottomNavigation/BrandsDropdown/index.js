import React, { useState } from 'react';

import {
  Dropdown,
  Label,
  Menu,
  ArrowUp,
  BrandName,
  HoverHelpLine,
} from './styled';





const BrandsDropdown = () => {
  const [brands, setBrands] = useState([
    {
      label: 'Metaphysika',
      isClicked: false
    },
    {
      label: 'Irregular Choice',
      isClicked: false
    },
    {
      label: 'Magdalena Klasnja',
      isClicked: false
    }
  ])
  return (
    <Dropdown>
      <Label>Brands</Label>
      <Menu>
        <ArrowUp />
        <HoverHelpLine />

        {brands.map(brand => 
   <BrandName>{brand.label}</BrandName>
        )}     
          
      </Menu>
    </Dropdown>
  );
};

export default BrandsDropdown;
