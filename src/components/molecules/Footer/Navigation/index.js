import { useHistory } from 'react-router';
import styled from 'styled-components';

const Wrapper = styled.div`
  :not(:last-child) {
    margin-right: 25px;
  }
`;

const Item = styled.span`
  font-size: 12px;

  cursor: pointer;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Navigation = () => {
  const history = useHistory();

  const navigationItems = [
    { label: 'ABOUT US', link: '/about' },
    { label: 'FAQ AND CONTACT', link: '/faq' },
    { label: 'TERMS OF SERVICE', link: '/terms-of-service' },
    { label: 'PRIVACY POLICY', link: '/privacy-policy' },
    { label: 'RETURN POLICY', link: '/return-policy' }
  ];

  const onGoToPage = (path) => {
    window.scrollTo(0, 0);
    history.push(path);
  };

  return (
    <nav>
      {navigationItems.map((item, i) => {
        return (
          <Wrapper key={item.label + i}>
            <Item
              onClick={() => onGoToPage(item.link)}
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
