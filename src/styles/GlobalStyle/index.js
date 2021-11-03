import { createGlobalStyle } from 'styled-components';
import { theme } from '../';
import fonts from 'assets/fonts';

const { colors } = theme;

const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
  background-color: white;
   > body {
    height: 100%;
    background-color: white;

   }
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${fonts.sfPro.fontFamily};
    font-weight: ${fonts.sfPro.fontWeight.medium};
    color: ${colors.gray.text};

  }

`;

export default GlobalStyle;
