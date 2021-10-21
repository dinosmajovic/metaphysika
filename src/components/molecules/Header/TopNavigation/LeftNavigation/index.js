import React, { useState } from 'react';
import styled from 'styled-components';
import fonts from 'assets/fonts';
import { colors } from 'styles';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';

const NavigationItem = styled(Link)`
  margin-right: 20px;
  font-size: 12px;
  cursor: pointer;
  font-weight: ${fonts.sfPro.fontWeight.semibold};
  text-decoration: none;
  text-transform: uppercase;

  :active,
  :hover {
    color: ${colors.pink.dark};
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const LeftNavigation = ({ navigationInfo }) => {
  return (
    <nav>
      {navigationInfo.map((item) => (
        <NavigationItem to={item.link} key={item.label}>
          {item.label}
        </NavigationItem>
      ))}
    </nav>
  );
};

export default LeftNavigation;
