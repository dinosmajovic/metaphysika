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
  width: 500px;
  height: 500px;
  display: block;
  text-align: center;
  margin-left: 20px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  @media (max-width: 800px) {
    width: auto;
    height: 300px;
    width: 100%;
    margin-left: 0px;
    margin-bottom: 10px;
  }

  @media (max-width: 800px) {
    height: 300px;
  }
`;

export const ImagesContainer = styled.div`
  max-height: 500px;
  overflow: scroll;

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const Image = styled.div`
  width: 100px;
  height: 100px;
  display: block;
  text-align: center;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
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
    object-fit: cover;
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
