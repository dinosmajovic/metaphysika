import fonts from 'assets/fonts/index';
import styled from 'styled-components';
import { colors } from 'styles/index';
import aboutUs from 'assets/images/aboutUs.jpg';

export const Wrapper = styled.div`
  width: 100%;
  align-items: flex-start;
  max-width: 1600px;
  margin: auto;
  padding: 10px 20px;
`;

export const Item1 = styled.div`
  background-image: url(${aboutUs});
  background-size: cover;
  height: 0;
  padding-bottom: 35%;
`;

export const Item2 = styled.div`
  color: #424242;
  padding: 30px 0px;

  > span {
    font-size: 20px;
    font-weight: ${fonts.sfPro.fontWeight.regular};

    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }

  > :not(:last-child) {
    display: block;
    margin-bottom: 20px;
  }
`;
export const Item3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const Container = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  background-color: #e8e8e8;

  @media (max-width: 1024px) {
    padding: 20px;
  }

  > h1 {
    font-size: 28px;
    color: ${colors.pink.primary};
    margin-bottom: 15px;

    @media (max-width: 1024px) {
      font-size: 20px;
    }
  }

  > span {
    font-size: 20px;
    font-weight: ${fonts.sfPro.fontWeight.regular};
    color: #707070;

    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
`;

export const Item4 = styled.div`
  > p {
    color: #424242;
    padding-bottom: 20px;
    font-size: 20px;
    font-weight: ${fonts.sfPro.fontWeight.regular};

    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }

  > :first-child {
    padding-top: 20px;
  }

  > span {
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;

    > span {
      color: ${colors.pink.primary};
      font-weight: ${fonts.sfPro.fontWeight.regular};
      font-size: 20px;

      @media (max-width: 1024px) {
        font-size: 16px;
      }
    }
  }
`;
