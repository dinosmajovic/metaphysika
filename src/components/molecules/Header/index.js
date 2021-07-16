import styled from 'styled-components';
import { colors } from 'styles';
import Logo from './Logo';
import TopNavigation from './TopNavigation';
import BottomNavigation from './BottomNavigation';

const HeaderWrapper = styled.header`
  padding: 15px;
  width: 100%;
  @media (max-width: 1024px) {
    padding: 10px;
    position: relative;
    border-bottom: 1px solid ${colors.gray.light};
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <TopNavigation />
      <Logo />
      <BottomNavigation />
    </HeaderWrapper>
  );
};

export default Header;
