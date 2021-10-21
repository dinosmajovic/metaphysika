import { MenuWrapper, Menu, UserName } from './styled';

import Backdrop from 'components/atoms/ModalBackdrop';
import TopItems from './TopItems';
import MiddleItems from './MiddleItems';
import Info from './Info';
import { useSelector } from 'react-redux';

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
    <>
      <Backdrop
        isOpen={hamburgerIsOpen}
        onBackdrop={() => onMenuToggle('hamburgerIcon')}
      />
      <MenuWrapper hamburgerIsOpen={hamburgerIsOpen}>
        <Menu hamburgerIsOpen={hamburgerIsOpen}>
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
      </MenuWrapper>
    </>
  );
};

export default HamburgerMenu;
