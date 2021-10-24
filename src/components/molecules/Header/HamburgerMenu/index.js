import { MenuWrapper, Menu, UserName } from './styled';
import Backdrop from 'components/atoms/ModalBackdrop';
import TopItems from './TopItems';
import MiddleItems from './MiddleItems';
import Info from './Info';
import { useSelector } from 'react-redux';
import HamburgerIcon from 'hamburger-react';
import { HamburgerIconWrapper } from './styled';

const HamburgerMenu = ({
  navigationInfo,
  hamburgerIsOpen,
  onMenuToggle,
  categories,
  brands,
  setIsSignUpModal
}) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const { userData } = useSelector((state) => state.user);

  return (
    <Menu hamburgerIsOpen={hamburgerIsOpen}>
      <HamburgerIconWrapper type={'menu'}>
        <HamburgerIcon
          size={25}
          onToggle={() => onMenuToggle('hamburgerIcon')}
          toggled={hamburgerIsOpen}
        />
      </HamburgerIconWrapper>

      {isAuthenticated && (
        <UserName>
          <span>Hi</span>
          <span>{userData.firstName}</span>
        </UserName>
      )}
      <TopItems
        categories={categories}
        brands={brands}
        onMenuToggle={onMenuToggle}
      />
      <MiddleItems
        setIsSignUpModal={setIsSignUpModal}
        onMenuToggle={onMenuToggle}
        isAuthenticated={isAuthenticated}
      />
      <Info navigationInfo={navigationInfo} onMenuToggle={onMenuToggle} />
    </Menu>
  );
};

export default HamburgerMenu;
