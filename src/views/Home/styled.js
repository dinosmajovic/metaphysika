import styled from 'styled-components';
import fonts from 'assets/fonts';
import { colors } from 'styles';

const imageTemplate = () => {
  return `  
  color: #fff;
  cursor: pointer;
  height: 0px;
  display: flex;
  justify-content: center;
  position: relative;
  background-size: cover;


  > span {
    position: absolute;
    bottom: 3%;
    color: white;
    font-size: 25px;
    font-weight: ${fonts.sfPro.fontWeight.bold};
    padding: 3px 20px;
    border-radius: 3px;
  }`;
};

export const Button = styled.button`
  margin-top: 2%;
  padding: 10px 25px;
  border-radius: 5px;
  border: none;
  background-color: ${colors.pink.primary};
  color: white;
  font-size: 17px;
  font-weight: ${fonts.sfPro.fontWeight.bold};
  cursor: pointer;

  :hover,
  :active,
  :focus {
    background-color: ${colors.pink.dark};
  }

  @media screen and (max-width: 1050px) {
    font-size: 15px;
  }

  @media screen and (max-width: 800px) {
    font-size: 14px;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  padding-top: 10px;
  width: 100%;
  display: grid;
  grid-gap: 30px;

  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, auto);

  /* @media screen and (max-width: 1050px) {
    grid-gap: 30px;
  }

  @media screen and (max-width: 800px) {
    grid-gap: 20px;
  } */
`;

export const Item1 = styled.div`
  grid-row: 1/2;
  background-image: url(${({ url }) => url});
  padding-bottom: 35%;
  ${imageTemplate()}

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    right: 3%;
    top: 3%;

    > span {
      color: white;
      font-size: 30px;
      font-weight: ${fonts.sfPro.fontWeight.bold};

      /* @media screen and (max-width: 1050px) {
        font-size: 24px;
      }

      @media screen and (max-width: 800px) {
        font-size: 18px;
      }

      @media screen and (max-width: 800px) {
        display: none;
      } */
    }
  }
`;
export const Item2 = styled.div`
  grid-row: 2/-3;
  margin: 0px 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, auto);
  grid-gap: 50px;

  /* @media screen and (max-width: 1050px) {
    margin: 0px 30px;
    grid-gap: 30px;
  }

  @media screen and (max-width: 850px) {
    margin: 0px 20px;
    grid-gap: 20px;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, auto);
  } */
`;
export const Item3 = styled.div`
  grid-row: 3/-2;
  margin: 0px 50px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, auto);
  grid-gap: 50px;

  /* @media screen and (max-width: 1050px) {
    margin: 0px 30px;
    margin-bottom: 30px;
    grid-gap: 30px;
  }

  @media screen and (max-width: 850px) {
    margin: 0px 20px;
    margin-bottom: 20px;
    grid-gap: 20px;
  } */
`;
export const Item21 = styled.div`
  background-image: url(${({ url }) => url});
  padding-bottom: 130%;
  ${imageTemplate()}
`;
export const Item22 = styled.div`
  background-image: url(${({ url }) => url});
  padding-bottom: 130%;
  ${imageTemplate()}
`;
export const Item23 = styled.div`
  background-image: url(${({ url }) => url});
  padding-bottom: 130%;
  ${imageTemplate()}
`;

export const Item31 = styled.div`
  background-image: url(${({ url }) => url});
  padding-bottom: 72%;
  ${imageTemplate()}
`;

export const Item32 = styled.div`
  background-image: url(${({ url }) => url});
  padding-bottom: 72%;
  ${imageTemplate()}
`;
