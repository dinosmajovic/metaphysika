import React from 'react';
import LeftNavigation from './LeftNavigation';
import RightNavigation from './RightNavigation';
import styled from 'styled-components';

const TopNavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopNavigation = ({
  onLogInModal,
  onSignUpModal,
  isOpen,
  onMenuToggle,
  navigationInfo
}) => {
  return (
    <TopNavigationContainer>
      <LeftNavigation
        isOpen={isOpen}
        onMenuToggle={onMenuToggle}
        navigationInfo={navigationInfo}
      />
      <RightNavigation
        onLogInModal={onLogInModal}
        onSignUpModal={onSignUpModal}
      />
    </TopNavigationContainer>
  );
};

export default TopNavigation;
