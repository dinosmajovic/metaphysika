import React from 'react';
import Images from './Images';
import RelatedProducts from './RelatedProducts';
import styled from 'styled-components';
import useWindowSize from 'hooks/useWindowSize';

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
  const { width } = useWindowSize();

  const isTablet = width >= 1024;

  return (
    <Wrapper>
      <Images
        onImageClick={onImageClick}
        images={images}
        mainImage={mainImage}
        onOpenModal={onOpenModal}
      />
      {isTablet && <RelatedProducts relatedProducts={relatedProducts} />}
    </Wrapper>
  );
};

export default ProductImages;
