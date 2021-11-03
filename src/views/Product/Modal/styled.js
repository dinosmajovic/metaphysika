import styled from 'styled-components';
import { colors } from 'styles';

export const ModalContainer = styled.div`
  position: fixed;
  background-color: white;
  display: flex;
  z-index: 30;
  padding: 20px;
  border-radius: 5px;
  animation: openModal 0.7s ease-out forwards;

  @keyframes openModal {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    50% {
      opacity: 1;
      transform: translateX(0%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 800px) {
    padding: 10px;
  }
`;

export const Wrapper = styled.div``;

export const MainImage = styled.div`
  padding: 40px;
  width: 550px;
  height: 640px;
  display: block;
  text-align: center;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 800px) {
    padding: 0px;
    width: auto;
    height: 400px;
    margin-bottom: 10px;
  }

  @media (max-width: 800px) {
    height: 300px;
  }
`;

export const ImagesContainer = styled.div`
  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const Image = styled.div`
  padding: 5px;
  width: 100px;
  height: 100px;
  display: block;
  text-align: center;
  cursor: pointer;
  border: 1px solid
    ${({ isClicked }) =>
      isClicked ? `${colors.pink.primary}` : `${colors.white.primary}`};

  :not(:last-child) {
    margin-bottom: 15px;
  }

  :hover {
    border: 1px solid ${colors.pink.primary};
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 800px) {
    justify-content: center;
    padding: 0;
    margin-right: 10px;

    :last-child {
      margin-bottom: 15px;
    }
  }
`;

export const ModalCloseWrapper = styled.span`
  width: 27px;
  height: 27px;
  position: absolute;
  right: 15px;
  top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 800px) {
    top: 5px;
    right: 5px;
  }

  @media (max-width: 500px) {
    width: 24px;
    height: 24px;
  }
`;
