import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const params = useParams();
  const { brandName, productName, categoryName, subCategoryName } = params || {};

  return (
    <>
      <div>Brand: {params?.brandName}</div>
      <div>Product: {params?.productName}</div>
      <div>Category: {params?.categoryName}</div>
      <div>Sub category: {params?.subCategoryName}</div>
    </>
  );
};

export default Product;
