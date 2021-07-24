import styled from 'styled-components';
import { colors } from 'styles';
import fonts from 'assets/fonts';

export const InputContainer = styled.div`
  position: relative;
  height: 41px;
  width: 100%;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  pointer-events: none;
  position: absolute;
  left: 12px;
  top: 8px;
  padding: 4px;
  transition: all 0.2s;
  color: #80868b;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: ${({ isValid }) =>
    isValid
      ? `1px solid ${colors.gray.light}`
      : '1px solid rgba(246, 71, 71, 1)'};
  outline: none;
  border-radius: 6px;
  padding-left: 16px;
  background: none;
  z-index: 1;
  font-size: 16;

  :-webkit-autofill {
    -webkit-background-clip: text;
    background-clip: text;
  }

  :focus {
    border: 1px solid ${colors.pink.primary};
  }

  :focus ~ ${Label} {
    top: -11px;
    left: 0.8rem;
    font-size: 10px;
    z-index: 10;
    color: ${colors.pink.primary};
    background-color: ${colors.white.primary};
  }

  &:not(:placeholder-shown) {
    ~ ${Label} {
      top: -11px;
      left: 0.8rem;
      font-size: 10px;
      z-index: 10;
      background-color: ${colors.white.primary};
    }
  }
`;

export const InputError = styled.span`
  font-size: 12px;
  color: rgba(246, 71, 71, 1);
  position: absolute;
  bottom: -17px;
  right: 10px;
  font-weight: ${fonts.sfPro.fontWeight.regular};
`;
