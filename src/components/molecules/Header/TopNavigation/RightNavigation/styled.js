import styled from 'styled-components';
import { colors } from 'styles';
import fonts from 'assets/fonts';

export const RightNavigationContainer = styled.span`
  display: flex;

  @media (max-width: 1024px) {
    display: none;
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
  z-index: 30;
  width: 135px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const MyBagMenu = styled.div`
  display: none;
  position: absolute;
  width: 300px;
  background-color: ${colors.white.primary};
  border-radius: 5px;
  z-index: 30;
  top: 35px;
  right: -3px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const MyWishListMenu = styled.div`
  display: none;
  width: 300px;
  background-color: ${colors.white.primary};
  position: absolute;
  top: 35px;
  right: -3px;
  border-radius: 5px;
  z-index: 30;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const IconContainer = styled.div`
  position: relative;

  :not(:last-child) {
    margin-right: 25px;
  }

  :hover {
    > ${MyProfileMenu}, ${MyBagMenu}, ${MyWishListMenu} {
      display: block;
    }
  }
`;

export const UserName = styled.span`
  position: absolute;
  width: max-content;
  right: 30px;
  top: 1px;

  > :first-child {
    color: ${colors.pink.dark};
    margin-right: 5px;
  }

  > span {
    font-size: 18px;
    font-weight: ${fonts.sfPro.fontWeight.semibold};
  }
`;
