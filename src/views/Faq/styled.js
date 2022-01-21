import fonts from 'assets/fonts';
import styled from 'styled-components';
import { colors } from 'styles';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 1900px;
  margin: 30px 0px;

  @media (max-width: 1300px) {
    flex-direction: column-reverse;
    align-items: center;
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

  @media (max-width: 1300px) {
    width: 550px;
    margin-bottom: 30px;
  }

  @media (max-width: 600px) {
    width: 100%;
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

export const Questions = styled.div`
  max-width: 600px;

  @media (max-width: 1400px) {
    width: 550px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Question = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  > span {
    font-size: 17px;

    @media (max-width: 600px) {
      font-size: 15px;
      margin-right: 7px;
      width: fit-content;
    }
  }

  > div {
    // icon
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

  @media (max-width: 600px) {
    padding: 20px 0px;
  }
`;

export const Answer = styled.p`
  margin-top: 10px;
  font-size: 15px;
  font-weight: ${fonts.sfPro.fontWeight.regular};
  line-height: 20px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const ContactInformation = styled.div`
  display: flex;
  margin-bottom: 10px;

  > :first-child {
    margin-right: 8px;
    font-size: 18px;
    font-weight: ${fonts.sfPro.fontWeight.medium};

    @media (max-width: 600px) {
      font-size: 16px;
    }
  }

  > :nth-child(2) {
    font-weight: ${fonts.sfPro.fontWeight.regular};

    @media (max-width: 600px) {
      font-size: 15px;
    }
  }
`;
