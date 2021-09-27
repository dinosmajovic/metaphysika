import styled from 'styled-components';
import { colors } from 'styles';

export const RightNavigationContainer = styled.span`
  display: flex;

  @media (max-width: 1100px) {
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
  z-index: 15;
  width: 135px;
`;

export const MyBagMenu = styled.div`
  display: none;
  position: absolute;
  width: 300px;
  background-color: ${colors.white.primary};
  box-shadow: 6px 6px 12px ${colors.gray.light};
  border-radius: 5px;
  border: 1px solid ${colors.gray.light};
  z-index: 15;
  top: 35px;
  right: -3px;
`;

export const MyWishListMenu = styled.div`
  display: none;
  width: 300px;
  background-color: ${colors.white.primary};
  position: absolute;
  top: 35px;
  right: -3px;
  border-radius: 5px;
  border: 1px solid ${colors.gray.light};
  z-index: 15;
  box-shadow: 6px 6px 12px ${colors.gray.light};
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
