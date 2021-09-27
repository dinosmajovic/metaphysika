import React from 'react';
import styled from 'styled-components';
import fonts from 'assets/fonts';
import { colors } from 'styles';
import { Link } from 'react-router-dom';

const NavigationItem = styled(Link)`
  margin-right: 20px;
  font-size: 12px;
  cursor: pointer;
  font-weight: ${fonts.sfPro.fontWeight.semibold};
  text-decoration: none;

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
    { label: 'TERMS OF SERVICE', link: '/terms-of-service' },
    { label: 'PRIVACY POLICY', link: '/privacy-policy' },
    { label: 'CONTACT', link: 'faq' },
    { label: 'RETURN POLICY', link: '/return-policy' },
    { label: 'SIZE GUIDE', link: '/size-guide' },
    { label: 'FAQ', link: '/faq' }
  ];

  return (
    <nav>
      {navigationItems.map((item) => (
        <NavigationItem to={item.link} key={item.label}>
          {item.label}
        </NavigationItem>
      ))}
    </nav>
  );
};

export default LeftNavigation;
