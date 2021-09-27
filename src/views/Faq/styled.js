import fonts from 'assets/fonts';
import styled from 'styled-components';
import { colors } from 'styles';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 30px;
  padding: 20px 150px;

  width: 100%;

  @media (max-width: 1680px) {
    padding: 20px 60px;
  }

  @media (max-width: 1400px) {
    padding: 20px 30px;
  }

  @media (max-width: 1320px) {
    flex-direction: column-reverse;
    justify-content: flex-start;
    width: 760px;
  }

  @media (max-width: 820px) {
    width: 579px;
  }
`;

export const ContactInfo = styled.div`
  > h1 {
    color: ${colors.pink.primary};
    font-weight: ${fonts.sfPro.fontWeight.semibold};
    font-size: 25px;
    margin-bottom: 20px;

    @media (max-width: 600px) {
      font-size: 20px;
    }
  }

  @media (max-width: 1320px) {
    margin-bottom: 50px;
  }
`;

export const FaqWrapper = styled.div`
  @media (max-width: 1200px) {
    margin: 0;
  }
`;

export const Title = styled.h1`
  color: ${colors.pink.primary};
  font-size: 25px;
  font-weight: ${fonts.sfPro.fontWeight.semibold};
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const Questions = styled.div``;

export const Question = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  > span {
    font-weight: ${fonts.sfPro.fontWeight.semibold};
    font-size: 17px;

    @media (max-width: 600px) {
      font-size: 13px;
    }
  }

  > div {
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (max-width: 600px) {
      width: 15px;
      height: 15px;
    }
  }
`;

export const QuestionAnswerContainer = styled.div`
  border-bottom: 1px solid ${colors.gray.light};
  padding: 20px 0px;
  width: 700px;

  @media (max-width: 820px) {
    width: 540px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Answer = styled.p`
  margin-top: 10px;
  font-size: 15px;
  font-weight: ${fonts.sfPro.fontWeight.regular};
  line-height: 20px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const ContactInformation = styled.div`
  display: flex;

  > :first-child {
    margin-right: 8px;
    font-size: 18px;
    font-weight: ${fonts.sfPro.fontWeight.semibold};

    @media (max-width: 600px) {
      font-size: 13px;
    }
  }

  > :nth-child(2) {
    @media (max-width: 600px) {
      font-size: 13px;
    }
  }
`;
