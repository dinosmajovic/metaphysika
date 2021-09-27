import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Item = styled.span`
  margin-right: 25px;
  font-size: 12px;
  cursor: pointer;
`;

const Navigation = () => {
  const navigationItems = [
    { label: 'ABOUT US', link: '/about' },
    { label: 'CONTACT US', link: '/faq' },
    { label: 'TERMS OF SERVICE', link: '/terms-of-service' },
    { label: 'PRIVACY POLICY', link: '/privacy-policy' },
    { label: 'RETURN POLICY', link: '/return-policy' }
  ];

  return (
    <nav>
      {navigationItems.map((item) => {
        return (
          <Link
            to={item.link}
            key={item.label}
            style={{ textDecoration: 'none' }}
          >
            <Item>{item.label}</Item>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
