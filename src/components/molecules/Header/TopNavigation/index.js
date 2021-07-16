import React from 'react';
import LeftNavigation from './LeftNavigation';
import RightNavigation from './RightNavigation';
import styled from 'styled-components';

const TopNavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopNavigation = () => {
  return (
    <TopNavigationContainer>
      <LeftNavigation />
      <RightNavigation />
    </TopNavigationContainer>
  );
};

export default TopNavigation;
