import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Wrapper,
  Top,
  MainImg,
  Bottom,
  Middle,
  Button,
  MiddleItem,
  BottomItem
} from './styled';
import axios from 'axios';

const Home = () => {
  const history = useHistory();
  const [images, setImages] = useState(null);

  useEffect(() => {
    getImages();
  }, []); // eslint-disable-line

  const getImages = async () => {
    try {
      const { data } = await axios.get('/homeImages');

      const images = data.resources;
      setImages(images);
    } catch (error) {
      history.push('/404');
    }
  };

  const goToPage = (path) => {
    history.push(path);
  };

  return (
    <Wrapper>
      <Top onClick={() => goToPage(images?.[6].context.custom.path)}>
        <MainImg url={images?.[6].url} />
        <Button type="top">{images?.[6].context.custom.caption}</Button>
      </Top>
      <Middle>
        <MiddleItem
          url={images?.[5].url}
          onClick={() => goToPage(images?.[5].context.custom.path)}
        >
          <Button type="small">{images?.[5].context.custom.caption}</Button>
        </MiddleItem>
        <MiddleItem
          url={images?.[4].url}
          onClick={() => goToPage(images?.[4].context.custom.path)}
        >
          <Button type="small">{images?.[4].context.custom.caption}</Button>
        </MiddleItem>
        <MiddleItem
          url={images?.[3].url}
          onClick={() => goToPage(images?.[3].context.custom.path)}
        >
          <Button type="small">{images?.[3].context.custom.caption}</Button>
        </MiddleItem>
        <MiddleItem
          url={images?.[2].url}
          onClick={() => goToPage(images?.[2].context.custom.path)}
        >
          <Button type="small">{images?.[2].context.custom.caption}</Button>
        </MiddleItem>
      </Middle>
      <Bottom>
        <BottomItem
          url={images?.[1].url}
          onClick={() => goToPage(images?.[1].context.custom.path)}
        >
          <Button>{images?.[1].context.custom.caption}</Button>
        </BottomItem>
        <BottomItem
          url={images?.[0].url}
          onClick={() => goToPage(images?.[0].context.custom.path)}
        >
          <Button>{images?.[0].context.custom.caption}</Button>
        </BottomItem>
      </Bottom>
    </Wrapper>
  );
};

export default Home;
