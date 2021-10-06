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

const RefreshToken = () => {
  const { isAuthenticated, refreshToken, tokenExpirationTime } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated && refreshToken) {
      dispatch(refreshUserToken(refreshToken));
    }
  }, [isAuthenticated]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (tokenExpirationTime) {
      const refreshTokenTime = (tokenExpirationTime - 50) * 1000;

      const timer = setInterval(() => {
        dispatch(refreshUserToken(refreshToken));
      }, refreshTokenTime);

      return () => clearInterval(timer);
    }
  }, [refreshToken]); // eslint-disable-line react-hooks/exhaustive-deps

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
