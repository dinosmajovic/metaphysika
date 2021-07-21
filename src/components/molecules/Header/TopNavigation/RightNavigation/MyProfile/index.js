import React from 'react';
import { ArrowHoverWrapper, ArrowUp, ItemContainer } from './styled';
import icon from 'assets/icons/person.svg';
import singUpBlack from 'assets/icons/singUp/singUpBlack.svg';
import singUpPink from 'assets/icons/singUp/singUpPink.svg';
import logInBlack from 'assets/icons/logIn/logInBlack.svg';
import logInPink from 'assets/icons/logIn/logInPink.svg';

const MyProfileMenu = () => {
  return (
    <>
      <ArrowHoverWrapper />
      <ArrowUp />
      <ItemContainer>
        <div>
          <img src={logInBlack} alt="icon" />
        </div>
        <span>Log in</span>
      </ItemContainer>
      <ItemContainer>
        <div>
          <img src={singUpBlack} alt="icon" />
        </div>
        <span>Sign up</span>
      </ItemContainer>
    </>
  );
};

export default MyProfileMenu;
