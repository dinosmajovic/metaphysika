import React from 'react';
import LeftNavigation from './LeftNavigation';
import RightNavigation from './RightNavigation';
import styled from 'styled-components';

const TopNavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;

  @media (max-width: 600px) {
    display: none;
  }
`;

const TopNavigation = ({ onLogInModal, onSignUpModal }) => {
  return (
    <TopNavigationContainer>
      <LeftNavigation />
      <RightNavigation
        onLogInModal={onLogInModal}
        onSignUpModal={onSignUpModal}
      />
    </TopNavigationContainer>
  );
};

export default TopNavigation;
