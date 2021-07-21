import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsWrapper } from './styled';
import axios from 'axios';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProductsGrid from './components/ProductsGrid';

import { PRODUCTS, FILTERS } from './consts';

const Products = () => {
  const params = useParams();
  const { brandName, categoryName, subCategoryName } = params || {};

  const getProducts = () => {
    axios
      .get('/products')
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsWrapper>
      <Header brandName={brandName} />
      <Sidebar
        filters={FILTERS}
        brandName={brandName}
        onApplyFilter={(filters) => console.log(filters)}
      />
      <ProductsGrid products={PRODUCTS} />
    </ProductsWrapper>
  );
};

export default Products;
