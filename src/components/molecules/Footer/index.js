import { FooterContainer, Line } from "./styled";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Socials from "./Socials";

const Footer = () => {
  return (
    <FooterContainer>
      <Logo />
      <Navigation />
      <Line />
      <Socials />
    </FooterContainer>
  );
};

export default Footer;
