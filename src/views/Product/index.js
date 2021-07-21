import { useEffect, useState } from 'react';
import ProductImages from './ProductImages';
import ProductInformations from './ProductInformations';
import { ProductContainer } from './styled';
import { PRODUCT } from './consts';

// import client from 'api/apollo-client';
// import { GET_PRODUCT } from 'queries/product/get_product';
// import { addToBag, sumSubtotalPrice } from 'state/bag';
// import Spinner from 'components/atoms/Spinner';

const Product = ({ path, id }) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    setTimeout(() => {
      setProduct('KARINA');
    }, 500);
  };

  if (product) {
    return (
      <ProductContainer>
        <div>product</div>
      </ProductContainer>
    );
  } else if (loading) {
    return <div>loading</div>;
  }
};

export default Product;

// <ProductImages
// onRelatedProduct={resetOptions}
// relatedProducts={product.relatedProducts}
// images={images}
// brand={brand}
// onImageClick={(id) => setImageToDefault(id, dispatch)}
// onDefaultImageClick={() => openModal(dispatch)}
// />

{
  /* <ProductInformations
          onAddToBag={addProductToBag}
          product={product}
          options={productOptions}
          onSizeClick={enableAddToBag}
          onInputClick={onInputClick}
          isErrorMessage={isErrorMessage}
        /> */
}
