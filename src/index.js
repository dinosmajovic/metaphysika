import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { store } from 'state';
import Routes from './routing';
import history from './routing/history';
import GlobalStyle from 'styles/GlobalStyle';
import { theme } from 'styles';

import Header from 'components/molecules/Header';
import Footer from 'components/molecules/Footer';
import LayoutWrapper from 'components/organisms/LayoutWrapper';

const App = () => (
  <Provider store={store}>
    <Router history={history}>
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

const renderApp = () => render(<App />, document.getElementById('root'));

renderApp();