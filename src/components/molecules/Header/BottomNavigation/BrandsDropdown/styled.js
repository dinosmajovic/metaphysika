import styled from 'styled-components';
import { colors } from 'styles';
import fonts from 'assets/fonts';
import { Link } from 'react-router-dom';

export const Menu = styled.div`
  position: absolute;
  display: none;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  border-radius: 5px;
  border: solid 1px ${colors.gray.light};
  background-color: ${colors.white.primary};
  white-space: nowrap;
  z-index: 50;
`;

export const BrandName = styled(Link)`
  padding: 10px 20px;
  color: ${({ isClicked }) => (isClicked ? `${colors.pink.dark}` : '')};
  display: block;
  text-decoration: none;

  :active,
  :hover {
    background-color: ${colors.gray.hover};
    color: ${colors.pink.primary};
  }
`;

export const Dropdown = styled.div`
  cursor: pointer;
  position: relative;
  margin-right: 45px;
  padding: 15px 0px;

  :hover {
    > ${Menu} {
      display: block;
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Label = styled.span`
  font-weight: ${fonts.sfPro.fontWeight.medium};
  color: ${({ brandIsClicked }) =>
    brandIsClicked ? colors.pink.primary : 'none'};
  padding-bottom: ${({ brandIsClicked }) => (brandIsClicked ? '2px' : 'none')};
  border-bottom: ${({ brandIsClicked }) =>
    brandIsClicked ? `1px solid ${colors.pink.primary}` : 'none'};
  text-transform: uppercase;
  font-size: 18px;
`;

export const ArrowUp = styled.span`
  position: absolute;
  right: 0px;
  top: -2px;
  left: 50%;
  margin-left: -50px;

  :before {
    content: '';
    display: block;
    position: absolute;
    top: 1px;
    width: 20px;
    height: 1px;
    background-color: ${colors.white.primary};
    left: 31%;
  }

  :after {
    content: '';
    display: block;
    position: absolute;
    top: -7px;
    width: 15px;
    height: 15px;
    border-radius: 2px;

    border-right: 1px solid ${colors.gray.light};
    border-bottom: 1px solid ${colors.gray.light};
    transform: rotate(-135deg);
    left: calc(31% + 2px);
  }
`;

export const HoverHelpLine = styled.span`
  width: 100%;
  height: 20px;
  position: absolute;
  left: 0;
  top: -20px;
`;
