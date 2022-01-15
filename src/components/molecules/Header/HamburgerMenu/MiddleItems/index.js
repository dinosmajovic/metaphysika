import {
  MiddleItemsWrapper,
  MiddleItem,
  BasketWrapper,
  IconWrapper
} from '../styled';
import basket from 'assets/icons/basket.svg';
import loginIcon from 'assets/icons/logIn/logInBlack.svg';
import signUp from 'assets/icons/signUp/signUpBlack.svg';
import { useDispatch } from 'react-redux';
import { onOpenLogInModal } from 'state/modal';
import { useHistory } from 'react-router';
import {
  bagPath,
  homePath,
  myProfilePath,
  myWishlistPath
} from 'constants/routes/index';
import person from 'assets/icons/person.svg';
import heart from 'assets/icons/heart.svg';

const MiddleItems = ({ onMenuToggle, isAuthenticated, setIsSignUpModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogIn = () => {
    dispatch(onOpenLogInModal());
    onMenuToggle();
  };

  const onSignUp = () => {
    setIsSignUpModal(true);
    onMenuToggle();
  };

  const onBag = () => {
    history.push(bagPath);
    onMenuToggle();
  };

  const onMyProfile = () => {
    history.push(myProfilePath);
    onMenuToggle();
  };

  const onLogOut = () => {
    dispatch({ type: 'RESET_APP' });
    history.push(homePath);
    onMenuToggle();
  };

  const onWishlist = () => {
    history.push(myWishlistPath);
    onMenuToggle();
  };

  if (isAuthenticated) {
    return (
      <MiddleItemsWrapper>
        <MiddleItem onClick={onBag}>
          <BasketWrapper type="middleItem">
            <img src={basket} alt={'icon'} />
          </BasketWrapper>
          <span>My bag</span>
        </MiddleItem>
        <MiddleItem onClick={onMyProfile}>
          <IconWrapper type="middleItem">
            <img src={person} alt={'icon'} />
          </IconWrapper>
          <span>My profile</span>
        </MiddleItem>
        <MiddleItem onClick={onWishlist}>
          <IconWrapper type="middleItem">
            <img src={heart} alt={'icon'} />
          </IconWrapper>
          <span>My wishlist</span>
        </MiddleItem>
        <MiddleItem onClick={onLogOut}>
          <IconWrapper type="middleItem">
            <img src={loginIcon} alt={'icon'} />
          </IconWrapper>
          <span>Log out</span>
        </MiddleItem>
      </MiddleItemsWrapper>
    );
  }

  return (
    <MiddleItemsWrapper>
      <MiddleItem onClick={onBag}>
        <BasketWrapper type="middleItem">
          <img src={basket} alt={'icon'} />
        </BasketWrapper>
        <span>My bag</span>
      </MiddleItem>
      <MiddleItem onClick={onLogIn}>
        <IconWrapper type="middleItem">
          <img src={loginIcon} alt={'icon'} />
        </IconWrapper>
        <span>Log in</span>
      </MiddleItem>
      <MiddleItem onClick={onSignUp}>
        <IconWrapper type="middleItem">
          <img src={signUp} alt={'icon'} />
        </IconWrapper>
        <span>Sign up</span>
      </MiddleItem>
    </MiddleItemsWrapper>
  );
};

export default MiddleItems;
