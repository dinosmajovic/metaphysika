import styled from 'styled-components';
import { colors } from 'styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;

  @media (max-width: 1150px) {
    width: 100%;
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
  width: 65%;
  outline: none;
  font-size: 15px;
  border: 1px solid ${colors.gray.light};
  border-radius: 5px;

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
