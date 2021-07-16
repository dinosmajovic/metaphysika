import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductsWrapper } from './styled';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

const FILTERS = [
  {
    label: 'SIZE',
    isOpened: false,
    values: [
      {
        label: '36',
        isChecked: false
      },
      {
        label: '37',
        isChecked: false
      },
      {
        label: '38',
        isChecked: false
      },
      {
        label: '39',
        isChecked: false
      },
      {
        label: '40',
        isChecked: false
      },
      {
        label: '41',
        isChecked: false
      },
      {
        label: '42',
        isChecked: false
      }
    ]
  },
  {
    label: 'BRAND',
    isOpened: false,
    values: [
      {
        label: 'Metaphysika',
        isChecked: false
      },
      {
        label: 'Irregular Choice',
        isChecked: false
      },
      {
        label: 'Magdalena Klašnja',
        isChecked: false
      }
    ]
  },
  {
    label: 'COLOR',
    isOpened: false,
    values: [
      {
        label: 'Black',
        isChecked: false
      },
      {
        label: 'Blue',
        isChecked: false
      },
      {
        label: 'Red',
        isChecked: false
      },
      {
        label: 'Orange',
        isChecked: false
      },
      {
        label: 'Purple',
        isChecked: false
      }
    ]
  }
];

const Product = () => {
  const params = useParams();
  const { brandName, productName, categoryName, subCategoryName } = params || {};

  return (
    <ProductsWrapper>
      <Header brandName={brandName} />
      <Sidebar filters={FILTERS} brandName={brandName} />
    </ProductsWrapper>
  );
};

export default Product;
