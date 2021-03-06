import styled from 'styled-components';
import fonts from 'assets/fonts';
import { colors } from 'styles';

export const Container = styled.div`
  background-color: ${colors.white.primary};
  z-index: 40;
  position: fixed;
  padding: 40px;
  border-radius: 5px;
  overflow: scroll;

  > h1 {
    font-size: 30px;
    margin-bottom: 10px;
    color: ${colors.gray.textLight};
  }

  > h2 {
    font-size: 25px;
    margin-bottom: 10px;
    color: ${colors.gray.textLight};
  }

  @media (max-width: 530px) {
    padding: 30px;
    width: 100%;
    height: 100%;
  }
`;

export const ForgotPassword = styled.span`
  font-size: 16px;
  font-weight: ${fonts.sfPro.fontWeight.light};
  display: block;
  margin-bottom: 20px;
  cursor: pointer;

  :active {
    color: ${colors.pink.dark};
  }
`;

export const FormContainer = styled.div`
  width: 380px;

  @media (max-width: 530px) {
    width: 100%;
  }
`;

export const SignUp = styled.span`
  display: flex;
  margin-bottom: 15px;

  span:first-child {
    font-weight: ${fonts.sfPro.fontWeight.light};
    margin-right: 8px;
    font-size: 16px;
  }

  span:nth-child(2) {
    font-weight: ${fonts.sfPro.fontWeight.light};
    font-size: 16px;
    cursor: pointer;
    border-bottom: 1px solid ${colors.pink.dark};
    color: ${colors.pink.dark};

    :active {
      color: ${colors.pink.light};
      border-bottom: 1px solid ${colors.pink.light};
    }
  }
`;

export const ModalCloseWrapper = styled.span`
  width: 23px;
  height: 23px;
  position: absolute;
  right: 8px;
  top: 8px;
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

export const ResetPasswordTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 15px;

  @media (max-width: 530px) {
    font-size: 18px;
  }
`;
