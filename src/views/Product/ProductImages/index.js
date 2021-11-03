import React from 'react';
import Images from './Images';
import RelatedProducts from './RelatedProducts';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-right: 20px;

  @media (max-width: 1024px) {
    margin-right: 0px;
  }
`;

const ProductImages = ({
  relatedProducts,
  images,
  mainImage,
  onOpenModal,
  onImageClick
}) => {
  return (
    <Wrapper>
      <Images
        onImageClick={onImageClick}
        images={images}
        mainImage={mainImage}
        onOpenModal={onOpenModal}
      />
      <RelatedProducts relatedProducts={relatedProducts} />
    </Wrapper>
  );
};

export default ProductImages;
