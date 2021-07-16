import styled from 'styled-components';
import metaphysikaLogo from 'assets/icons/metaphysikaLogo.svg';

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 5px;
  padding-top: 10px;

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
`;

const Logo = () => {
  return (
    <LogoContainer>
      <img src={metaphysikaLogo} alt="Metaphysika logo" />
    </LogoContainer>
  );
};

export default Logo;
