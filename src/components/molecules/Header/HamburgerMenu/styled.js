import { Link } from 'react-router-dom';
import styled from 'styled-components';
import fonts from 'assets/fonts/index';
import { colors } from 'styles';

export const MenuWrapper = styled.div``;

export const Menu = styled.div`
  padding: 20px;
  z-index: 26;
  position: fixed;
  display: ${({ hamburgerIsOpen }) => (hamburgerIsOpen ? 'block' : 'none')};
  background-color: ${colors.white.primary};
  border: 1px solid ${colors.gray.light};
  height: 100vh;
  top: 0;
  left: 0;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width: 300px;
  max-height: 100vh;
  overflow: scroll;

  @media (max-width: 541px) {
    width: 250px;
  }

  @media (max-width: 320px) {
    width: 220px;
  }
`;

export const NavigationItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const NavigationItem = styled(Link)`
  font-size: 17px;
  margin-top: 5px;
  cursor: pointer;
  font-weight: ${fonts.sfPro.fontWeight.medium};
  text-decoration: none;

  :active,
  :hover {
    color: ${colors.pink.dark};
  }
`;

export const HamburgerIconWrapper = styled.div`
  position: fixed;
  display: none;
  z-index: 30;
  left: 10px;
  top: 28px;

  @media (max-width: 1024px) {
    display: block;
  }

  @media (max-width: 600px) {
    top: 12px;
  }

  @media (max-width: 390px) {
    top: 5px;
  }
`;

export const TopItemsWrapper = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
`;

export const TopItemLink = styled(Link)`
  text-decoration: none;
  font-size: 19px;

  :active {
    color: ${colors.pink.primary};
  }

  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const ArrowItem = styled.div`
  font-size: 19px;
  position: relative;
  cursor: pointer;
  margin-bottom: ${({ isOpen }) => (isOpen ? '0px' : '15px')};
  width: fit-content;

  > span {
    font-size: 19px;

    :active {
      color: ${colors.pink.primary};
    }
  }

  > div {
    position: absolute;
    width: 16px;
    height: 16px;
    top: 1px;
    right: -20px;
  }
`;

export const IconWrapper = styled.div`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 2px;
  left: ${({ type }) => (type === 'middleItem' ? '0' : '65px')};

  > img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

export const MiddleItemsWrapper = styled.div`
  margin-top: 20px;
  border-top: 1px solid ${colors.gray.light};
  border-bottom: 1px solid ${colors.gray.light};
`;

export const MiddleItem = styled.div`
  position: relative;
  cursor: pointer;

  margin-top: 15px;

  :last-child {
    margin-bottom: 15px;
  }

  > span {
    font-size: 18px;
    display: block;
    margin-left: 25px;

    :active {
      color: ${colors.pink.primary};
    }
  }
`;

export const BasketWrapper = styled.div`
  width: 22px;
  height: 22px;
  position: absolute;
  top: 0px;
  left: -2px;

  > img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

export const Brands = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  margin-left: 10px;
`;

export const Brand = styled(Link)`
  margin-top: 10px;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;

  :last-child {
    margin-bottom: 10px;
  }

  :active {
    color: ${colors.pink.primary};
  }
`;

export const UserName = styled.div`
  position: absolute;
  font-size: 16px;
  top: 35px;
  right: 20px;

  > :first-child {
    color: ${colors.pink.dark};
    font-size: 22px;
    margin-right: 5px;
  }

  > :nth-child(2) {
    font-size: 22px;
  }

  @media (max-width: 600px) {
    top: 18px;
  }

  @media (max-width: 390px) {
    top: 13px;
  }
`;
