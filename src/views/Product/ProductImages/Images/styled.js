import styled from 'styled-components';
import { colors } from 'styles';

export const Wrapper = styled.div`
  display: flex;
  margin-right: 20px;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    margin-right: 0px;
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

export const MainImage = styled.div`
  border: solid 1px ${colors.gray.light};
  width: 400px;
  height: 490px;
  text-align: center;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 10px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    width: 100%;
    max-width: 350px;
    height: 350px;
    align-self: center;
  }
`;

export const ImagesContainer = styled.div`
  margin-right: 20px;
  width: fit-content;
  max-height: 455px;
  overflow: scroll;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-self: center;
    grid-template-rows: auto;
    grid-gap: 10px;
    margin: 0px;
    max-height: none;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 370px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Image = styled.div`
  border: 1px solid
    ${({ isClicked }) =>
      isClicked ? `${colors.pink.primary}` : `${colors.gray.light}`};
  border-radius: 8px;
  overflow: hidden;
  width: 90px;
  height: 90px;
  display: block;
  text-align: center;
  cursor: pointer;
  margin-bottom: 10px;

  :hover {
    border: 1px solid ${colors.pink.primary};
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    margin: 0px;
  }
`;
