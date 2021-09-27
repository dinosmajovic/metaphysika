import React from 'react';
import Images from './Images';
import RelatedProducts from './RelatedProducts';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-right: 10%;

  @media (max-width: 1300px) {
    margin-right: 0px;
  }

  @media (max-width: 950px) {
    padding: 20px;
    width: 100%;
  }

  @media (max-width: 600px) {
    padding: 5px;
    width: 100%;
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
      <RelatedProducts relatedProducts={relatedProducts.data} />
    </Wrapper>
  );
};

export default ProductImages;
