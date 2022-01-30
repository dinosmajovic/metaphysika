import { FooterContainer, Line } from './styled';
import Logo from './Logo';
import Navigation from './Navigation';
import Socials from './Socials';
import mc_big from 'assets/images/logos/mc_big.png';
import ms_big from 'assets/images/logos/ms_big.png';
import visa_small from 'assets/images/logos/visa_small.gif';

import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 20px;

  > img {
    width: 70px;
  }

  > :nth-child(2) {
    width: 60px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Logo />
      <Navigation />
      <Line />
      <Socials />
      <CardContainer>
        <img src={mc_big} alt="mastercard" />
        <img src={ms_big} alt="maestro" />
        <img src={visa_small} alt="visa" />
      </CardContainer>
    </FooterContainer>
  );
};

export default Footer;
