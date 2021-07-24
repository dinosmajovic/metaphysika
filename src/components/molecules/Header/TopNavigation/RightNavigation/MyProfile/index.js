import React from 'react';
import { ArrowHoverWrapper, ArrowUp, ItemContainer } from './styled';
import singUpBlack from 'assets/icons/singUp/singUpBlack.svg';
import logInBlack from 'assets/icons/logIn/logInBlack.svg';

const MyProfileMenu = ({ onLogInModal, onSignUpModal }) => {
  return (
    <>
      <ArrowHoverWrapper />
      <ArrowUp />
      <ItemContainer onClick={onLogInModal}>
        <div>
          <img src={logInBlack} alt="icon" />
        </div>
        <span>Log in</span>
      </ItemContainer>
      <ItemContainer onClick={onSignUpModal}>
        <div>
          <img src={singUpBlack} alt="icon" />
        </div>
        <span>Sign up</span>
      </ItemContainer>
    </>
  );
};

export default MyProfileMenu;
