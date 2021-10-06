import React from 'react';
import { ArrowHoverWrapper, ArrowUp, ItemContainer } from './styled';
import singUpBlack from 'assets/icons/singUp/singUpBlack.svg';
import logInBlack from 'assets/icons/logIn/logInBlack.svg';
import personBlack from 'assets/icons/person.svg';
import { useDispatch, useSelector } from 'react-redux';
import { homePath, myProfilePath } from 'constants/routes/index';
import { useHistory } from 'react-router';
import { logOutUser } from 'state/user';

const MyProfileMenu = ({ onLogInModal, onSignUpModal }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOutUser());
    history.push(homePath);
  };

  const onGoToMyProfile = () => {
    history.push(myProfilePath);
  };

  if (isAuthenticated) {
    return (
      <>
        <ArrowHoverWrapper />
        <ArrowUp />
        <ItemContainer onClick={onGoToMyProfile}>
          <div>
            <img src={personBlack} alt="icon" />
          </div>
          <span>My profile</span>
        </ItemContainer>
        <ItemContainer onClick={onLogOut}>
          <div>
            <img src={logInBlack} alt="icon" />
          </div>
          <span>Log out</span>
        </ItemContainer>
      </>
    );
  } else {
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
  }
};

export default MyProfileMenu;
