import React from 'react';
import Images from './Images';
import RelatedProducts from './RelatedProducts';

const ProductImages = ({
  relatedProducts,
  images,
  mainImage,
  onOpenModal,
  onImageClick
}) => {
  return (
    <div>
      <div>
        <Images
          onImageClick={onImageClick}
          images={images}
          mainImage={mainImage}
          onOpenModal={onOpenModal}
        />
        <RelatedProducts relatedProducts={relatedProducts} />
      </div>
    </div>
  );
};

export default ProductImages;
