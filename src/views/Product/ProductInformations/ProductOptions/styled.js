import styled from 'styled-components';
import { colors } from 'styles';
import fonts from 'assets/fonts';

export const Options = styled.div`
  display: flex;
  z-index: 50;
  position: relative;
  z-index: 120;
`;

export const Option = styled.div`
  margin-right: 33px;
  margin-bottom: 40px;
  position: relative;
  > h2 {
    font-size: 20px;
    font-weight: ${fonts.sfPro.fontWeight.regular};
    margin-bottom: 5px;
    z-index: 50;
  }
`;

export const Dropdown = styled.div`
  width: 140px;
  height: 35px;
  border: solid 1px ${colors.gray.light};
  border-radius: 5px;
  padding: 7px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: ${colors.gray.hover};
  }

  > h2 {
    font-size: 16px;
    font-weight: ${fonts.sfPro.fontWeight.light};
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 13px;
    width: 13px;
  }
`;

export const DropdownMenu = styled.div`
  width: 100%;
  position: absolute;
  border: 1px solid ${colors.gray.light};
  background-color: ${colors.white.primary};
  z-index: 10;
  top: 60px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: ${({ isOpened }) => (isOpened ? 'flex' : 'none')};
  flex-direction: column;
  cursor: pointer;

  > span {
    padding: 8px 10px;
    font-size: 15px;
    font-weight: ${fonts.sfPro.fontWeight.light};

    :hover {
      background-color: ${colors.gray.hover};
      color: ${colors.pink.primary};
      display: flex;
    }
  }
`;

export const SizeError = styled.span`
  font-size: 14px;
  color: ${colors.pink.dark};
  align-self: flex-end;
  position: absolute;
  left: 172px;
  bottom: 18px;
`;
