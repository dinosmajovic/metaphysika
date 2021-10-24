import { useEffect } from 'react';
import Logo from './Logo';
import { useLocation } from 'react-router';
import TopNavigation from './TopNavigation';
import BottomNavigation from './BottomNavigation';
import { HeaderWrapper } from './styled';
import { useState } from 'react';
import Backdrop from 'components/atoms/Backdrop';
import LogInModal from './LogInModal';
import SignUpModal from './SignUpModal';
import HamburgerMenu from './HamburgerMenu';
import { getBrandsAndCategories } from 'state/header';
import { useDispatch, useSelector } from 'react-redux';
import { onOpenLogInModal, onCloseLogInModal } from 'state/modal';
import HamburgerIcon from 'hamburger-react';
import { HamburgerIconWrapper } from './HamburgerMenu/styled';

const Header = () => {
  const dispatch = useDispatch();

  const [isSignUpModal, setIsSignUpModal] = useState(false);
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
  const navigationInfo = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Terms of service', link: '/terms-of-service' },
    { label: 'Privact Policy', link: '/privacy-policy' },
    { label: 'Contact', link: 'faq' },
    { label: 'Return policy', link: '/return-policy' },
    { label: 'Size guide', link: '/size-guide' },
    { label: 'Faq', link: '/faq' }
  ];
  const { isLogInModal } = useSelector((state) => state.modal);
  const { categories, brands } = useSelector((state) => state.header);
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getBrandsAndCategories());
  }, [isAuthenticated]);

  const onLogInModal = () => {
    dispatch(onOpenLogInModal());
  };

  const onSignUpModal = () => {
    setIsSignUpModal(true);
  };

  const onBackdropCloseLoginModal = (event) => {
    event.target.className.includes('backdrop') &&
      dispatch(onCloseLogInModal());
  };

  const onBackdropCloseSignUpModal = (event) => {
    event.target.className.includes('backdrop') && setIsSignUpModal(false);
  };

  const onHamburgerToggle = (type = 'navigationItem') => {
    setHamburgerIsOpen(!hamburgerIsOpen);

    if (type !== 'hamburgerIcon') {
      window.scrollTo(0, 0);
    }
  };

  const onBackdrop = (event) => {
    event.target.className.includes('backdrop') &&
      onHamburgerToggle('hamburgerIcon');
  };

  return (
    <HeaderWrapper>
      <HamburgerIconWrapper>
        <HamburgerIcon
          size={25}
          onToggle={() => onHamburgerToggle('hamburgerIcon')}
          toggled={hamburgerIsOpen}
        />
      </HamburgerIconWrapper>
      {isLogInModal && (
        <Backdrop onBackdropClick={(event) => onBackdropCloseLoginModal(event)}>
          <LogInModal setIsSignUpModal={setIsSignUpModal} />
        </Backdrop>
      )}

      {isSignUpModal && (
        <Backdrop
          onBackdropClick={(event) => onBackdropCloseSignUpModal(event)}
        >
          <SignUpModal setIsSignUpModal={setIsSignUpModal} />
        </Backdrop>
      )}

      {hamburgerIsOpen && (
        <Backdrop onBackdropClick={onBackdrop}>
          <HamburgerMenu
            navigationInfo={navigationInfo}
            hamburgerIsOpen={hamburgerIsOpen}
            onMenuToggle={onHamburgerToggle}
            categories={categories}
            brands={brands}
            setIsSignUpModal={setIsSignUpModal}
          />
        </Backdrop>
      )}

      <TopNavigation
        navigationInfo={navigationInfo}
        onLogInModal={onLogInModal}
        onSignUpModal={onSignUpModal}
      />
      <Logo />
      <BottomNavigation categories={categories} brands={brands} />
    </HeaderWrapper>
  );
};

export default Header;
