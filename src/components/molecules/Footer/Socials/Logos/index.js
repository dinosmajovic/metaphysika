import styled from "styled-components";

import fbLogo from "assets/icons/fbLogo.svg";
import instaLogo from "assets/icons/instaLogo.svg";
import mapsLogo from "assets/icons/mapsLogo.svg";

const LogosWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const Icon = styled.span`
  height: 32px;
  width: 32px;
  border: solid 1px #e8e8e8;
  border-radius: 100%;
  cursor: pointer;
`;

const Logos = () => {
  const logos = [
    { logo: fbLogo, alt: "Facebook logo" },
    { logo: instaLogo, alt: "Instangram logo" },
    { logo: mapsLogo, alt: "Google Maps logo" },
  ];

  return (
    <LogosWrapper>
      {logos.map((icon, i) => (
        <Icon key={i}>
          <img src={icon.logo} alt={icon.alt} />
        </Icon>
      ))}
    </LogosWrapper>
  );
};

export default Logos;
