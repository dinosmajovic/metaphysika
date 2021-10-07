import { useEffect } from 'react';
import Logo from './Logo';
import { useLocation } from 'react-router';
import TopNavigation from './TopNavigation';
import BottomNavigation from './BottomNavigation';
import { HeaderWrapper, SideMenu } from './styled';
import queryString from 'query-string';
import { useState } from 'react';
import Backdrop from 'components/atoms/Backdrop';
import LogInModal from './LogInModal';
import SignUpModal from './SignUpModal';

const Header = () => {
  const location = useLocation();

  const [isLogInModal, setIsLogInModal] = useState(false);
  const [isSignUpModal, setIsSignUpModal] = useState(false);
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

  const { login } = queryString.parse(location.search);

  useEffect(() => {
    if (Boolean(login)) {
      setIsLogInModal(true);
    }
  }, [login]);

  const onLogInModal = () => {
    setIsLogInModal(true);
  };

  const onSignUpModal = () => {
    setIsSignUpModal(true);
  };

  const onBackdropCloseLoginModal = (event) => {
    event.target.className.includes('backdrop') && setIsLogInModal(false);
  };

  const onBackdropCloseSignUpModal = (event) => {
    event.target.className.includes('backdrop') && setIsSignUpModal(false);
  };

  const onHamburgerToggle = () => {
    setHamburgerIsOpen(!hamburgerIsOpen);
  };

  return (
    <HeaderWrapper>
      {isLogInModal && (
        <Backdrop onBackdropClick={(event) => onBackdropCloseLoginModal(event)}>
          <LogInModal
            setIsLogInModal={setIsLogInModal}
            setIsSignUpModal={setIsSignUpModal}
          />
        </Backdrop>
      )}

      {isSignUpModal && (
        <Backdrop
          onBackdropClick={(event) => onBackdropCloseSignUpModal(event)}
        >
          <SignUpModal
            setIsSignUpModal={setIsSignUpModal}
            setIsLogInModal={setIsLogInModal}
          />
        </Backdrop>
      )}

      {hamburgerIsOpen && <SideMenu></SideMenu>}

      <TopNavigation
        isOpen={hamburgerIsOpen}
        onMenuToggle={onHamburgerToggle}
        onLogInModal={onLogInModal}
        onSignUpModal={onSignUpModal}
      />
      <Logo />
      <BottomNavigation />
    </HeaderWrapper>
  );
};

export default Header;
