import styled from 'styled-components';
import metaphysikaLogo from 'assets/icons/metaphysikaLogo.svg';
import { useHistory } from 'react-router';

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;

  > img {
    cursor: pointer;
    width: fit-content;
    height: 85px;
  }

  @media (max-width: 1024px) {
    > img {
      height: 70px;
    }
  }

  @media (max-width: 600px) {
    > img {
      display: flex;
      height: 40px;
    }
  }

  @media (max-width: 390px) {
    > img {
      height: 30px;
      width: fit-content;
    }
  }

  @media (max-width: 320px) {
    justify-content: flex-end;
    > img {
      height: 30px;
      width: fit-content;
    }
  }
`;

const Logo = () => {
  const history = useHistory();

  const onLogo = () => {
    history.push('/');
  };

  return (
    <LogoContainer onClick={onLogo}>
      <img src={metaphysikaLogo} alt="Metaphysika logo" />
    </LogoContainer>
  );
};

export default Logo;
