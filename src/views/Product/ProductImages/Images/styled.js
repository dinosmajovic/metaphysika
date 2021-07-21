import styled from 'styled-components';
import colors from 'styles/Colors';
import fonts from 'assets/fonts';

export const Wrapper = styled.div`
  display: flex;
  margin-right: 20px;
  margin-bottom: 40px;
`;

export const MainImage = styled.div`
  border: solid 1px ${colors.gray.light};
  padding: 40px;
  width: 400px;
  height: 490px;
  display: block;
  text-align: center;
  cursor: pointer;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ImagesContainer = styled.div`
  > div {
    :not(:last-child) {
      margin-bottom: 10px;
      margin-right: 15px;
    }
  }
`;

export const Image = styled.div`
  border: solid 1px
    ${(props) =>
      props.isClicked ? `${colors.pink.primary}` : `${colors.gray.light}`};
  padding: 5px;
  width: 90px;
  height: 90px;
  display: block;
  text-align: center;
  cursor: pointer;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  width: 140px;
  height: 40px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: ${fonts.sfPro.fontWeight.semibold};
  background-color: ${colors.pink.primary};
  color: ${colors.white.primary};
  margin-left: 50%;
  transform: translateX(-25%);

  display: none;

  :active {
    background-color: ${colors.pink.dark};
  }

  @media (max-width: 910px) {
    display: block;
  }
`;
