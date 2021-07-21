import { Wrapper, ImagesContainer, Image, MainImage, Button } from './styled';

const Images = ({ images, onImageClick, onDefaultImageClick }) => {
  return (
    <>
      <div></div>
      <Wrapper>
        <ImagesContainer>
          {images.restImages.map((image) => {
            return (
              <Image
                isClicked={image.isClicked}
                key={image.link}
                onClick={() => onImageClick(image.link)}
              >
                <img src={image.link} alt="Product image" />
              </Image>
            );
          })}
        </ImagesContainer>
        <MainImage onClick={onDefaultImageClick}>
          <img src={images.defaultImage} alt="Product image" />
        </MainImage>
      </Wrapper>
      <Button>ADD TO BAG</Button>
    </>
  );
};

export default Images;
