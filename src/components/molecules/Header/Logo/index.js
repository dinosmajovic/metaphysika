import styled from 'styled-components';
import metaphysikaLogo from 'assets/icons/metaphysikaLogo.svg';

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 5px;
  padding-top: 10px;
  position: relative;

  > img {
    width: 550px;
    height: 85px;
  }

  @media (max-width: 1024px) {
    padding: 0px;
    > img {
      width: 460px;
      height: 60px;
    }
  }

  @media (max-width: 600px) {
    > img {
      width: 250px;
      height: 60px;
    }
  }

  @media (max-width: 400px) {
    > img {
      width: 220px;
      height: 60px;
    }
  }
`;

const MenuButton = styled.div`
  display: none;
  width: 30px;
  height: 30px;
  background-color: black;
  position: absolute;
  right: 0px;
  top: 30%;

  @media (max-width: 600px) {
    display: block;
  }

  @media (max-width: 400px) {
    width: 30px;
    height: 30px;
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <img src={metaphysikaLogo} alt="Metaphysika logo" />
      <MenuButton />
    </LogoContainer>
  );
};

export default Logo;
