import styled from 'styled-components';
import { colors } from 'styles';
import modalClose from 'assets/icons/modalClose.svg';

export const ModalContainer = styled.div`
  position: fixed;
  background-color: white;
  display: flex;
  top: 100px;
  z-index: 130;
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
  padding: 5px;
  width: 100px;
  height: 100px;
  display: block;
  text-align: center;
  cursor: pointer;

  border: 1px solid
    ${({ isClicked }) =>
      isClicked ? `${colors.pink.primary}` : `${colors.white.primary}`};

  :hover {
    border: 1px solid ${colors.pink.primary};
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ModalCloseWrapper = styled.span`
  width: 29px;
  height: 29px;
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
`;
