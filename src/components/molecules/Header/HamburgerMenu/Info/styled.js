import styled from 'styled-components';
import { colors } from 'styles';
import { Link } from 'react-router-dom';

export const InfoWrapper = styled.div`
  margin-top: 20px;
  position: relative;
  width: fit-content;
  cursor: pointer;

  > span {
    font-size: 19px;

    :active {
      color: ${colors.pink.primary};
    }
  }

  > div {
    position: absolute;
    width: 16px;
    height: 16px;
    top: 3px;
    right: -20px;
  }
`;

export const NavigationItems = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  margin-left: 10px;
`;

export const NavigationItem = styled(Link)`
  margin-top: 10px;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;

  :active {
    color: ${colors.pink.primary};
  }
`;
