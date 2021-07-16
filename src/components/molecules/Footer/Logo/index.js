import styled from 'styled-components';
import metaphysikaLogo from 'assets/icons/metaphysikaLogo.svg';
import { colors } from 'styles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 20px;

  @media (max-width: 1130px) {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  height: 35px;
  width: 230px;
`;

const Slogan = styled.span`
  display: block;
  font-size: 12px;
  margin-top: 3px;
  color: ${colors.pink.dark};
`;

const Logo = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src={metaphysikaLogo} alt="Metaphysika logo" />
      </LogoWrapper>
      <Slogan>For the passion of fashion</Slogan>
    </Container>
  );
};

export default Logo;
