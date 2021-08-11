import {
  Container,
  MainImage,
  Images,
  Template,
  Image,
  Description
} from './styled';
import Button from 'components/atoms/Button/index';
import ClothesImage from 'assets/images/HomePageImages/1.jpg';
import MetaphysikaShoes from 'assets/images/HomePageImages/2.jpg';
import Shoes from 'assets/images/HomePageImages/4.jpg';
import Shoes2 from 'assets/images/HomePageImages/3.jpg';

const Home = () => {
  return (
    <Container>
      <MainImage>
        <span>Shop now and get up to 30% Off</span>
        <Button type="white" size="big">
          Shop Now
        </Button>
      </MainImage>
      <Images>
        <Template>
          <Image>
            <img src={Shoes} alt="shoes" />
          </Image>
          <Description color="#4C4B42">
            <span>Shoes</span>
          </Description>
        </Template>
        <Template>
          <Image>
            <img src={MetaphysikaShoes} alt="metaphysika design" />
          </Image>
          <Description color="#C0B29D">
            <span>Metaphysika design</span>
          </Description>
        </Template>
        <Template>
          <Image>
            <img src={ClothesImage} alt="clothes" />
          </Image>
          <Description color="#64A7B8">
            <span>Clothes</span>
          </Description>
        </Template>
        <Template>
          <Image>
            <img src={ClothesImage} alt="clothes" />
          </Image>
          <Description color="#64A7B8">
            <span>Clothes</span>
          </Description>
        </Template>
        <Template>
          <Image>
            <img src={Shoes2} alt="metaphysika design" />
          </Image>
          <Description color="#C0B29D">
            <span>Magdalena Klašnja design</span>
          </Description>
        </Template>
        <Template>
          <Image>
            <img src={Shoes} alt="shoes" />
          </Image>
          <Description color="#4C4B42">
            <span>Shoes</span>
          </Description>
        </Template>
      </Images>
    </Container>
  );
};

export default Home;

// import { useEffect, useState } from 'react';
// useEffect(() => {
//   fetchProducts();
// }, []);
// const [products, setProducts] = useState(null);

// const fetchProducts = () => {
//   fetch('/products').then((res) => console.log(res.json()));
// };
