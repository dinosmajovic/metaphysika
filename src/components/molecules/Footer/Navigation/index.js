import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  :not(:last-child) {
    margin-right: 25px;
  }
`;

const Item = styled(Link)`
  font-size: 12px;
  cursor: pointer;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Navigation = () => {
  const navigationItems = [
    { label: 'ABOUT US', link: '/about' },
    { label: 'FAQ AND CONTACT', link: '/faq' },
    { label: 'TERMS OF SERVICE', link: '/terms-of-service' },
    { label: 'PRIVACY POLICY', link: '/privacy-policy' },
    { label: 'RETURN POLICY', link: '/return-policy' }
  ];

  return (
    <nav>
      {navigationItems.map((item) => {
        return (
          <Wrapper>
            <Item
              to={item.link}
              key={item.label}
              style={{ textDecoration: 'none' }}
            >
              {item.label}
            </Item>
          </Wrapper>
        );
      })}
    </nav>
  );
};

export default Navigation;
