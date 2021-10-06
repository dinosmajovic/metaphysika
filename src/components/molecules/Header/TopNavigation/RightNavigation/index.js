import React from 'react';
import {
  RightNavigationContainer,
  Icon,
  IconContainer,
  MyProfileMenu,
  MyBagMenu,
  MyWishListMenu,
  UserName
} from './styled';
import heart from 'assets/icons/heart.svg';
import basket from 'assets/icons/basket.svg';
import person from 'assets/icons/person.svg';
import MyProfile from './MyProfile';
import MyBag from './MyBag';
import MyWishlist from './MyWishlist';
import { useSelector } from 'react-redux';

const RightNavigation = ({ onLogInModal, onSignUpModal }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const { userData } = useSelector((state) => state.user);

  return (
    <RightNavigationContainer>
      <IconContainer>
        {isAuthenticated && (
          <UserName>
            <span>Hi</span>
            <span>{userData.firstName}</span>
          </UserName>
        )}
        <Icon to="/">
          <img src={person} alt="person icon" />
        </Icon>
        <MyProfileMenu>
          <MyProfile
            onLogInModal={onLogInModal}
            onSignUpModal={onSignUpModal}
          />
        </MyProfileMenu>
      </IconContainer>

      <IconContainer>
        <Icon to="/bag">
          <img src={basket} alt="basket icon" />
        </Icon>
        <MyBagMenu>
          <MyBag />
        </MyBagMenu>
      </IconContainer>

      <IconContainer>
        <Icon to="/wishlist">
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
