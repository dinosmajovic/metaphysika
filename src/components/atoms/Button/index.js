import styled from 'styled-components';
import { colors } from 'styles';
import fonts from 'assets/fonts';

const SmallButton = styled.button`
  cursor: pointer;
  width: 115px;
  height: 30px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: ${fonts.sfPro.fontWeight.semibold};

  border: ${(props) =>
    props.type === 'pink' ? `none` : `1px solid ${colors.pink.primary}`};

  background-color: ${(props) =>
    props.type === 'pink' ? `${colors.pink.primary}` : `${colors.white.primary}`};

  color: ${(props) =>
    props.type === 'pink' ? `${colors.white.primary}` : `${colors.pink.primary}`};

  :active {
    background-color: ${(props) =>
      props.type === 'pink' ? `${colors.pink.dark}` : `${colors.gray.light}`};
  }

  :disabled {
    background-color: ${colors.pink.light};

    cursor: auto;
  }
`;

const MediumButton = styled.button`
  cursor: pointer;
  width: 140px;
  height: 36px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: ${fonts.sfPro.fontWeight.semibold};

  border: ${(props) =>
    props.type === 'pink' ? `none` : `1px solid ${colors.pink.primary}`};

  background-color: ${(props) =>
    props.type === 'pink' ? `${colors.pink.primary}` : `${colors.white.primary}`};

  color: ${(props) =>
    props.type === 'pink' ? `${colors.white.primary}` : `${colors.pink.primary}`};

  :active {
    background-color: ${(props) =>
      props.type === 'pink' ? `${colors.pink.dark}` : `${colors.gray.light}`};
  }

  :disabled {
    background-color: ${colors.pink.light};

    cursor: auto;
  }
`;

const BigButton = styled.button`
  cursor: pointer;
  width: 180px;
  height: 40px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: ${fonts.sfPro.fontWeight.semibold};

  border: ${(props) =>
    props.type === 'pink' ? `none` : `1px solid ${colors.pink.primary}`};

  background-color: ${(props) =>
    props.type === 'pink' ? `${colors.pink.primary}` : `${colors.white.primary}`};

  color: ${(props) =>
    props.type === 'pink' ? `${colors.white.primary}` : `${colors.pink.primary}`};

  :active {
    background-color: ${(props) =>
      props.type === 'pink' ? `${colors.pink.dark}` : `${colors.gray.light}`};
  }

  :disabled {
    background-color: ${colors.pink.light};

    cursor: auto;
  }
`;

const Button = ({
  size = 'medium',
  children,
  type = 'pink',
  isClicked,
  buttonIsDisabled = false
}) => {
  if (size === 'small' && type === 'pink') {
    return (
      <SmallButton
        size={size}
        type={type}
        onClick={isClicked}
        disabled={buttonIsDisabled}
      >
        {children}
      </SmallButton>
    );
  } else if (size === 'small' && type === 'white') {
    return (
      <SmallButton size={size} type={type} onClick={isClicked}>
        {children}
      </SmallButton>
    );
  } else if (size === 'big' && type === 'pink') {
    return (
      <BigButton size={size} type={type} onClick={isClicked} disabled={buttonIsDisabled}>
        {children}
      </BigButton>
    );
  } else if (size === 'big' && type === 'white') {
    return (
      <BigButton size={size} type={type} onClick={isClicked}>
        {children}
      </BigButton>
    );
  } else if (size === 'medium' && type === 'pink') {
    return (
      <MediumButton
        size={size}
        type={type}
        onClick={isClicked}
        disabled={buttonIsDisabled}
      >
        {children}
      </MediumButton>
    );
  } else if (size === 'medium' && type === 'white') {
    return (
      <MediumButton
        size={size}
        type={type}
        onClick={isClicked}
        disabled={buttonIsDisabled}
      >
        {children}
      </MediumButton>
    );
  }
};

export default Button;
