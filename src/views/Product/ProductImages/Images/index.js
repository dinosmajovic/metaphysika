import { Wrapper, ImagesContainer, Image, MainImage } from './styled';

const Images = ({ images, mainImage, onOpenModal, onImageClick }) => {
  return (
    <Wrapper>
      <ImagesContainer>
        {images.map((item) => {
          return (
            <Image
              key={item.link}
              onClick={() => onImageClick(item.link)}
              isClicked={item.isClicked}
            >
              <img src={item.link} alt="product" />
            </Image>
          );
        })}
      </ImagesContainer>
      <MainImage onClick={onOpenModal}>
        <img src={mainImage} alt="product" />
      </MainImage>
    </Wrapper>
  );
};

export default Images;
