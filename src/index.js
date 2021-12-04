import { useEffect } from 'react';
import { render } from 'react-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { store } from 'state';
import Routes from './routing';
import GlobalStyle from 'styles/GlobalStyle';
import { theme } from 'styles';
import Header from 'components/molecules/Header';
import Footer from 'components/molecules/Footer';
import LayoutWrapper from 'components/organisms/LayoutWrapper';
import { refreshUserToken } from 'state/user';
import { API } from './api';

const RefreshToken = () => {
  const { isAuthenticated, refreshToken, tokenExpirationTime } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated && refreshToken) {
      dispatch(refreshUserToken(refreshToken));
    }
  }, [isAuthenticated, refreshToken, dispatch]);

  useEffect(() => {
    if (tokenExpirationTime) {
      const refreshTokenTime = (tokenExpirationTime - 50) * 1000;

      const timer = setInterval(() => {
        dispatch(refreshUserToken(refreshToken));
      }, refreshTokenTime);

      return () => clearInterval(timer);
    }
  }, [refreshToken, dispatch, tokenExpirationTime]);

  return null;
};

const App = () => {
  return (
    <Provider store={store}>
      <RefreshToken />
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <LayoutWrapper>
            <Header />
            <Routes />
            <Footer />
          </LayoutWrapper>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

const renderApp = () => render(<App />, document.getElementById('root'));

renderApp();

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
