import styled from 'styled-components';
import colors from 'styles/Colors';
import fonts from 'assets/fonts';

export const Options = styled.div`
  display: flex;
  z-index: 50;
`;

export const Option = styled.div`
  margin-right: 33px;
  margin-bottom: 40px;
  position: relative;
  > h2 {
    font-size: 20px;
    font-weight: ${fonts.sfPro.fontWeight.regular};
    margin-bottom: 5px;
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
  transition: opacity 0.3s;
  display: flex;
  opacity: ${(props) => (props.isOpened ? '1' : '0')};
  transform: ${(props) =>
    props.isOpened ? 'translateX(0)' : 'translateX(-960px)'};
  flex-direction: column;

  > span {
    padding: 8px 10px;
    font-size: 15px;
    font-weight: ${fonts.sfPro.fontWeight.light};

    :hover {
      background-color: ${colors.gray.light};
      color: ${colors.pink.primary};
      display: flex;
    }
  }
`;
