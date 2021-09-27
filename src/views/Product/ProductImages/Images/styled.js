import styled from 'styled-components';
import { colors } from 'styles';

export const Wrapper = styled.div`
  display: flex;
  margin-right: 20px;
  margin-bottom: 40px;

  @media (max-width: 550px) {
    flex-direction: column-reverse;
    margin-right: 0px;
  }
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

  @media (max-width: 550px) {
    width: 100%;
    height: 350px;
    margin-bottom: 10px;
    padding: 20px;
    border: none;
  }
`;

export const ImagesContainer = styled.div`
  > div {
    :not(:last-child) {
      margin-bottom: 10px;
      margin-right: 15px;

      @media (max-width: 550px) {
        margin-right: 0px;
      }
    }
  }

  @media (max-width: 550px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const Image = styled.div`
  border: 1px solid
    ${({ isClicked }) =>
      isClicked ? `${colors.pink.primary}` : `${colors.gray.light}`};
  padding: 5px;
  width: 90px;
  height: 90px;
  display: block;
  text-align: center;
  cursor: pointer;

  :hover {
    border: 1px solid ${colors.pink.primary};
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
