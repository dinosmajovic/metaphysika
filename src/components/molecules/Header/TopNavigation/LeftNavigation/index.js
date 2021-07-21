import React from 'react';
import styled from 'styled-components';
import fonts from 'assets/fonts';
import { colors } from 'styles';

const NavigationItem = styled.a`
  margin-right: 20px;
  font-size: 12px;
  cursor: pointer;
  font-weight: ${fonts.sfPro.fontWeight.semibold};

  :active,
  :hover {
    color: ${colors.pink.dark};
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const LeftNavigation = () => {
  const navigationItems = [
    { label: 'HOME', link: '/' },
    { label: 'ABOUT', link: '/about' },
    { label: 'TERMS OF SERVICE', link: '/' },
    { label: 'PRIVACY POLICY', link: '/' },
    { label: 'CONTACT', link: '/' },
    { label: 'RETURN POLICY', link: '/' },
    { label: 'SELECT LANGUAGE', link: '/' }
  ];

  return (
    <nav>
      {navigationItems.map((item) => (
        <NavigationItem key={item.label}>{item.label}</NavigationItem>
      ))}
    </nav>
  );
};

export default LeftNavigation;
