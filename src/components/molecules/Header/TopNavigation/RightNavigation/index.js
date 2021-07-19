import React from 'react';
import {
  RightNavigationContainer,
  Icon,
  IconContainer,
  MyProfileMenu,
  MyBasketMenu,
  MyWishListMenu
} from './styled';
import heart from 'assets/icons/heart.svg';
import basket from 'assets/icons/basket.svg';
import person from 'assets/icons/person.svg';
import MyProfileItems from 'components/atoms/MyProfileMenu';

const RightNavigation = () => {
  return (
    <RightNavigationContainer>
      <IconContainer>
        <Icon>
          <img src={person} alt="person icon" />
        </Icon>
        <MyProfileMenu>
          <MyProfileItems />
        </MyProfileMenu>
      </IconContainer>

      <IconContainer>
        <Icon>
          <img src={basket} alt="basket icon" />
        </Icon>
        <MyBasketMenu></MyBasketMenu>
      </IconContainer>

      <IconContainer>
        <Icon>
          <img src={heart} alt="heart icon" />
        </Icon>
        <MyWishListMenu></MyWishListMenu>
      </IconContainer>
    </RightNavigationContainer>
  );
};

export default RightNavigation;
