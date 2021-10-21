import { useHistory } from 'react-router-dom';

import {
  Wrapper,
  Item1,
  Item2,
  Item3,
  Item21,
  Item22,
  Item23,
  Item31,
  Item32,
  Button
} from './styled';

const Home = () => {
  const history = useHistory();

  const goToPage = (page) => {
    history.push(page);
  };

  return (
    <Wrapper>
      <Item1
        url={
          'https://res.cloudinary.com/metaphysika/image/upload/v1630301231/first_copy_xzuqmq.jpg'
        }
        onClick={() => goToPage('/categories/sale')}
      >
        <div>
          <span>Shop now and get up to 30% Off</span>
          <Button>SHOP NOW</Button>
        </div>
      </Item1>
      <Item2>
        <Item21
          url={
            'https://res.cloudinary.com/metaphysika/image/upload/v1630312109/clothes_dw13v9.jpg'
          }
          onClick={() => goToPage('/categories/clothes')}
        />
        <Item22
          url={
            'https://res.cloudinary.com/metaphysika/image/upload/v1630309685/shoes_jydnby.jpg'
          }
          onClick={() => goToPage('/categories/shoes')}
        />
        <Item23
          url={
            'https://res.cloudinary.com/metaphysika/image/upload/v1630311955/acessories_xsdgec.jpg'
          }
          onClick={() => goToPage('/categories/accesories')}
        />
      </Item2>
      <Item3>
        <Item31
          url={
            'https://res.cloudinary.com/metaphysika/image/upload/v1630312352/sale_putk3m.jpg'
          }
          onClick={() => goToPage('/categories/sale')}
        />
        <Item32
          url={
            'https://res.cloudinary.com/metaphysika/image/upload/v1630311105/24b_1_of_1_gsrjjc.jpg'
          }
          onClick={() => goToPage('/categories/new')}
        />
      </Item3>
    </Wrapper>
  );
};

export default Home;

// const productSchema = {
//   brandId: 'qjietmBihqLVY57OF16r',
//   categoryIds: ['NQmcVdpkxwUEdZuysHwv'],
//   subcategoryIds: ['mVXjDNLzWRdYOHy4vF1O'],
//   name: 'Testing product 1 - black/white',
//   path: 'testing-product-1-black-white',
//   price: 778,
//   color: 'black/white',
//   description: `Imperial March in to winter in these striking ankle boots featuring black metallic patterned leather and unique curved platform soles. With Stormtrooper and Darth Vader heels, this pair will ensure that your allegiance to the Galactic Empire is made abundantly clear.`,
//   structure: [''],
//   sku: '4259-01A',
//   sizes: [
//     {
//       stock: 5,
//       name: '39'
//     },
//     {
//       stock: 4,
//       name: '38'
//     }
//   ],
//   images: [
//     'https://firebasestorage.googleapis.com/v0/b/metaphysika-18630.appspot.com/o/productsImages%2FThe%20Death%20Star%20-%20black-white%2F12244667_1239262772754305_7351718553720551399_o.jpg?alt=media&token=22676f2a-389b-44da-a29f-b5d2c4fa5ced',
//     'https://firebasestorage.googleapis.com/v0/b/metaphysika-18630.appspot.com/o/productsImages%2FThe%20Death%20Star%20-%20black-white%2F12109175_1232362570110992_6538615731363767524_n.png?alt=media&token=59758cd3-21c5-4d70-bd04-0420013b16a4',
//     'https://firebasestorage.googleapis.com/v0/b/metaphysika-18630.appspot.com/o/productsImages%2FThe%20Death%20Star%20-%20black-white%2F12250118_1239262706087645_1518233732255218564_n.jpg?alt=media&token=a3982dd2-32be-4a5e-a475-ab6f14f49d73',
//     'https://firebasestorage.googleapis.com/v0/b/metaphysika-18630.appspot.com/o/productsImages%2FThe%20Death%20Star%20-%20black-white%2F12246810_1239262762754306_7086323168239164522_n.jpg?alt=media&token=973d695b-6477-49f3-8987-96f97fdcba74',
//     'https://firebasestorage.googleapis.com/v0/b/metaphysika-18630.appspot.com/o/productsImages%2FThe%20Death%20Star%20-%20black-white%2F12196189_1232362600110989_3257240288534465470_n.png?alt=media&token=0dc86644-9b71-408f-97b4-2e157822a94c',
//     'https://firebasestorage.googleapis.com/v0/b/metaphysika-18630.appspot.com/o/productsImages%2FThe%20Death%20Star%20-%20black-white%2F12250118_1239262706087645_1518233732255218564_n.jpg?alt=media&token=a3982dd2-32be-4a5e-a475-ab6f14f49d73',
//     'https://firebasestorage.googleapis.com/v0/b/metaphysika-18630.appspot.com/o/productsImages%2FThe%20Death%20Star%20-%20black-white%2F019.jpg?alt=media&token=33ddd649-3428-43ef-b331-f48575022674'
//   ],
//   mainImg:
//     'https://firebasestorage.googleapis.com/v0/b/metaphysika-18630.appspot.com/o/productsImages%2FThe%20Death%20Star%20-%20black-white%2F12244667_1239262772754305_7351718553720551399_o.jpg?alt=media&token=22676f2a-389b-44da-a29f-b5d2c4fa5ced'
// };

// console.log(JSON.stringify(productSchema));
