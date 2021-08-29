import { useHistory } from 'react-router-dom';
import {
  Container,
  MainImage,
  MiddleImages,
  BottomImages,
  MiddleImage,
  BottomImage
} from './styled';

const Home = () => {
  const history = useHistory();

  const goToPage = (page) => {
    history.push(page);
  };
  return (
    <Container>
      <MainImage>
        <div>
          <span>SHOP NOW AND GET UP TO 30% OFF</span>
        </div>
      </MainImage>
      <MiddleImages>
        <MiddleImage
          onClick={() => goToPage('categories/shoes')}
          url={
            'https://res.cloudinary.com/metaphysika/image/upload/v1629928690/11233533_1122041994476384_5229515622828517017_n-1_dgc55n.jpg'
          }
        >
          <span>CLOTHES</span>
        </MiddleImage>
        <MiddleImage
          onClick={() => goToPage('brands/metaphysika')}
          url={
            'https://res.cloudinary.com/metaphysika/image/upload/v1629929100/11174793_1115320981815152_6104364767035205636_n_tdp8kb.jpg'
          }
        >
          <span>METAPHYSIKA</span>
        </MiddleImage>
        <MiddleImage
          onClick={() => goToPage('categories/shoes')}
          url={
            'https://res.cloudinary.com/metaphysika/image/upload/v1629929162/11062012_1116805748333342_3833598397722169435_n_sdpjra.jpg'
          }
        >
          <span>SHOES</span>
        </MiddleImage>
      </MiddleImages>
      <BottomImages>
        <BottomImage
          onClick={() => goToPage('categories/sale')}
          url={
            'https://res.cloudinary.com/metaphysika/image/upload/v1629928893/11245799_1122731761074074_8712816680590886536_n_l4txwh.jpg'
          }
        >
          <span>SALE</span>
        </BottomImage>
        <BottomImage
          onClick={() => goToPage('categories/new')}
          url={
            'https://res.cloudinary.com/metaphysika/image/upload/v1629929256/11147212_1123444817669435_3121851933390405771_n_ywfyec.jpg'
          }
        >
          <span>NEW ARRIVALS</span>
        </BottomImage>
      </BottomImages>
    </Container>
  );
};

export default Home;
