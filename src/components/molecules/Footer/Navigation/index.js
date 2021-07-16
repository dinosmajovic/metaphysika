import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Item = styled.a`
  margin-right: 25px;
  font-size: 12px;
  cursor: pointer;
`;

const Navigation = () => {
  const navigationItems = [
    { label: 'ABOUT US', link: '/about' },
    { label: 'CONTACT US', link: '/' },
    { label: 'TERMS OF SERVICE', link: '/' },
    { label: 'PRIVACY POLICY', link: '/' },
    { label: 'RETURN POLICY', link: '/' }
  ];

  return (
    <nav>
      {navigationItems.map((item) => {
        return (
          <Link href={item.link} key={item.label}>
            <Item>{item.label}</Item>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
