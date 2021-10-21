import styled from 'styled-components';
import fbLogo from 'assets/icons/fbLogo.svg';
import instaLogo from 'assets/icons/instaLogo.svg';
import mapsLogo from 'assets/icons/mapsLogo.svg';

const LogosWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const Icon = styled.a`
  height: 32px;
  width: 32px;
  border: solid 1px #e8e8e8;
  border-radius: 100%;
  cursor: pointer;
`;

const Logos = () => {
  const logos = [
    {
      logo: fbLogo,
      alt: 'Facebook logo',
      link: 'https://www.facebook.com/metaphysikahq'
    },
    {
      logo: instaLogo,
      alt: 'Instangram logo',
      link: 'https://www.instagram.com/metaphysika/'
    },
    {
      logo: mapsLogo,
      alt: 'Google Maps logo',
      link: 'https://www.google.com/maps/place/Feriza+Tumbula,+Sarajevo+71000/data=!4m2!3m1!1s0x4758c967102fe7f9:0x8a28cc8624ee364e?sa=X&ved=2ahUKEwj277Wt9dnzAhUxtYsKHc_HAkIQ8gF6BAgUEAE'
    }
  ];

  return (
    <LogosWrapper>
      {logos.map((icon, i) => (
        <Icon key={i} href={icon.link}>
          <img src={icon.logo} alt={icon.alt} />
        </Icon>
      ))}
    </LogosWrapper>
  );
};

export default Logos;
