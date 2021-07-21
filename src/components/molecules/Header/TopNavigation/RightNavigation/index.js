import React from 'react';
import {
  RightNavigationContainer,
  Icon,
  IconContainer,
  MyProfileMenu,
  MyBagMenu,
  MyWishListMenu
} from './styled';
import heart from 'assets/icons/heart.svg';
import basket from 'assets/icons/basket.svg';
import person from 'assets/icons/person.svg';
import MyProfile from './MyProfile';
import MyBag from './MyBag';
import MyWishlist from './MyWishlist';

const RightNavigation = () => {
  return (
    <RightNavigationContainer>
      <IconContainer>
        <Icon>
          <img src={person} alt="person icon" />
        </Icon>
        <MyProfileMenu>
          <MyProfile />
        </MyProfileMenu>
      </IconContainer>

      <IconContainer>
        <Icon>
          <img src={basket} alt="basket icon" />
        </Icon>
        <MyBagMenu>
          <MyBag />
        </MyBagMenu>
      </IconContainer>

      <IconContainer>
        <Icon>
          <img src={heart} alt="heart icon" />
        </Icon>
        <MyWishListMenu>
          <MyWishlist />
        </MyWishListMenu>
      </IconContainer>
    </RightNavigationContainer>
  );
};

export default RightNavigation;
