import fonts from 'assets/fonts/index';
import styled from 'styled-components';
import { colors } from 'styles/index';
import aboutUs from 'assets/images/aboutUs.jpg';

export const Wrapper = styled.div`
  padding-top: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
  align-items: flex-start;
`;

export const Item1 = styled.div`
  grid-column: 1 / 4;
  color: #fff;
  background-image: url(${aboutUs});
  background-size: cover;
  height: 0;
  padding-bottom: 40%;
`;

export const Item2 = styled.div`
  padding: 50px;
  grid-column: 1 / 4;
  color: #424242;

  > span {
    font-size: 20px;
    font-weight: ${fonts.sfPro.fontWeight.regular};
  }

  > :not(:last-child) {
    display: block;
    margin-bottom: 20px;
  }
`;
export const Item3 = styled.div`
  grid-column: 1 / 4;
  display: flex;
`;

export const Container = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  background-color: #e8e8e8;

  > h1 {
    font-size: 28px;
    color: ${colors.pink.primary};
    margin-bottom: 15px;
  }

  > span {
    font-size: 20px;
    font-weight: ${fonts.sfPro.fontWeight.regular};
    color: #707070;
  }
`;

export const Item4 = styled.div`
  grid-column: 1 / 4;
  padding: 30px;

  > p {
    color: #424242;
    padding: 20px;
    font-size: 20px;
    font-weight: ${fonts.sfPro.fontWeight.regular};
  }

  > span {
    display: flex;
    flex-direction: column;
    padding: 20px;

    > span {
      color: ${colors.pink.primary};
      font-weight: ${fonts.sfPro.fontWeight.regular};
      font-size: 20px;
    }
  }
`;
