import React from 'react';
import {
  ModalContainer,
  ImagesContainer,
  Image,
  MainImage,
  ModalCloseWrapper
} from './styled';
import closeModalIcon from 'assets/icons/modalClose.svg';

const Modal = ({ images, mainImage, onImageClick, onCloseModal }) => {
  return (
    <ModalContainer>
      <ModalCloseWrapper onClick={onCloseModal}>
        <img src={closeModalIcon} alt="icon" />
      </ModalCloseWrapper>
      <ImagesContainer>
        {images.map((item) => {
          return (
            <Image
              key={item.link}
              isClicked={item.isClicked}
              onClick={() => onImageClick(item.link)}
            >
              <img src={item.link} alt="product" />
            </Image>
          );
        })}
      </ImagesContainer>
      <MainImage>
        <img src={mainImage} alt="product" />
      </MainImage>
    </ModalContainer>
  );
};

export default Modal;
