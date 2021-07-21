import styled from 'styled-components';
import { colors } from 'styles';
import fonts from 'assets/fonts';

const SmallButton = styled.button`
  width: 115px;
  height: 30px;
  font-size: 12px;

  border-radius: 5px;
  cursor: pointer;
  font-weight: ${fonts.sfPro.fontWeight.semibold};
  border: ${({ type }) =>
    type === 'pink' ? 'none' : `1px solid ${colors.pink.primary}`};
  background-color: ${({ type }) =>
    type === 'pink' ? `${colors.pink.primary}` : `${colors.white.primary}`};
  color: ${({ type }) =>
    type === 'pink' ? `${colors.white.primary}` : `${colors.pink.primary}`};

  :active {
    background-color: ${({ type }) =>
      type === 'pink' ? `${colors.pink.dark}` : `${colors.gray.light}`};
  }

  :disabled {
    background-color: ${colors.pink.light};
    cursor: auto;
  }
`;

const MediumButton = styled.button`
  width: 140px;
  height: 36px;
  font-size: 15px;

  border-radius: 5px;
  cursor: pointer;
  font-weight: ${fonts.sfPro.fontWeight.semibold};
  border: ${({ type }) =>
    type === 'pink' ? 'none' : `1px solid ${colors.pink.primary}`};
  background-color: ${({ type }) =>
    type === 'pink' ? `${colors.pink.primary}` : `${colors.white.primary}`};
  color: ${({ type }) =>
    type === 'pink' ? `${colors.white.primary}` : `${colors.pink.primary}`};

  :active {
    background-color: ${({ type }) =>
      type === 'pink' ? `${colors.pink.dark}` : `${colors.gray.light}`};
  }

  :disabled {
    background-color: ${colors.pink.light};
    cursor: auto;
  }
`;

const BigButton = styled.button`
  width: 180px;
  height: 40px;
  font-size: 16px;

  border-radius: 5px;
  cursor: pointer;
  font-weight: ${fonts.sfPro.fontWeight.semibold};
  border: ${({ type }) =>
    type === 'pink' ? 'none' : `1px solid ${colors.pink.primary}`};
  background-color: ${({ type }) =>
    type === 'pink' ? `${colors.pink.primary}` : `${colors.white.primary}`};
  color: ${({ type }) =>
    type === 'pink' ? `${colors.white.primary}` : `${colors.pink.primary}`};

  :active {
    background-color: ${({ type }) =>
      type === 'pink' ? `${colors.pink.dark}` : `${colors.gray.light}`};
  }

  :disabled {
    background-color: ${colors.pink.light};
    cursor: auto;
  }
`;

const Button = ({
  size = 'medium',
  type = 'pink',
  onClick,
  isDisabled = false,
  children
}) => {
  if (size === 'small') {
    return (
      <SmallButton type={type} onClick={onClick} disabled={isDisabled}>
        {children}
      </SmallButton>
    );
  } else if (size === 'big') {
    return (
      <BigButton type={type} onClick={onClick} disabled={isDisabled}>
        {children}
      </BigButton>
    );
  } else if (size === 'medium') {
    return (
      <MediumButton type={type} onClick={onClick} disabled={isDisabled}>
        {children}
      </MediumButton>
    );
  }
};

export default Button;
