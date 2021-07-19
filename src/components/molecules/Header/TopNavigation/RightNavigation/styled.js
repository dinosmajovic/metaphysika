import styled from 'styled-components';
import { colors } from 'styles';

export const ArrowHoverWrapper = styled.span`
  width: 100%;
  height: 23px;
  display: block;
  position: absolute;
  right: 3px;
  top: -23px;
  opacity: 0;
`;

export const ArrowUp = styled.span`
  position: absolute;
  right: 0px;
  top: -2px;

  :before {
    content: '';
    display: block;
    position: absolute;
    top: 1px;
    width: 20px;
    height: 1px;
    background-color: ${colors.white.primary};
    right: 3px;
  }

  :after {
    background-color: ${(props) => (props.isHovered ? `${colors.gray.light}` : 'none')};
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
    right: 5px;
  }
`;

export const MyProfileMenu = styled.div`
  display: none;
  position: relative;
  background-color: ${colors.white.primary};
  box-shadow: 6px 6px 12px ${colors.gray.light};
  position: absolute;
  top: 35px;
  right: -3px;
  border-radius: 5px;
  border: 1px solid ${colors.gray.light};
  z-index: 10;
  width: 135px;
`;

export const MyBasketMenu = styled.div`
  display: none;
  width: 200px;
  height: 300px;
  background-color: green;
  position: absolute;
  right: 0;
`;

export const MyWishListMenu = styled.div`
  display: none;
  width: 200px;
  height: 300px;
  background-color: orange;
  position: absolute;
  right: 0;
`;

export const RightNavigationContainer = styled.span`
  display: flex;
`;

export const IconContainer = styled.div`
  position: relative;

  :not(:last-child) {
    margin-right: 25px;
  }

  :hover {
    > ${MyProfileMenu}, ${MyBasketMenu}, ${MyWishListMenu} {
      display: block;
    }
  }
`;

export const Icon = styled.span`
  height: 22px;
  width: 22px;
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
