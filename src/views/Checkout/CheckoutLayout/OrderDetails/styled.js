import styled from 'styled-components';
import { colors } from 'styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;

  @media (max-width: 1150px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    padding: ${({ type }) => (type === 'subTotal' ? '0px' : '20px')};
  }

  @media (max-width: 400px) {
    padding: 0px;
  }
`;

export const PromoCodeWrapper = styled.div`
  display: flex;
  height: 42px;
  width: 100%;
  margin-bottom: 30px;
  justify-content: space-between;
`;

export const Input = styled.input`
  padding: 10px;
  outline: none;
  font-size: 15px;
  border: 1px solid ${colors.gray.light};
  border-radius: 5px;
  width: 65%;

  :focus::placeholder {
    color: transparent;
  }
`;

export const ApplyButton = styled.button`
  width: 32%;
  cursor: pointer;
  font-size: 14px;
  border: 1px solid ${colors.pink.primary};
  background-color: ${colors.white.primary};
  color: ${colors.pink.primary};
  border-radius: 5px;

  :active {
    background-color: ${colors.gray.light};
  }
`;

export const LogosContainer = styled.span`
  margin-top: 20px;
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  margin-bottom: 30px;

  > span {
    font-size: 14px;
    color: ${colors.gray.textLight};
  }

  > img {
    height: 70px;
  }
`;
