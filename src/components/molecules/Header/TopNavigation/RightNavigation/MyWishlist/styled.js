import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'styles';

export const ArrowHoverWrapper = styled.span`
  width: 100%;
  height: 23px;
  display: block;
  position: absolute;
  right: 3px;
  top: -15px;
  opacity: 0;
  background-color: red;
`;

export const ArrowUp = styled.span`
  position: absolute;
  right: 0px;
  top: -2px;

  :before {
    content: '';
    display: block;
    position: absolute;
    top: 1px;
    width: 20px;
    height: 1px;
    background-color: ${colors.white.primary};
    right: 3px;
  }

  :after {
    background-color: ${colors.white.primary};
    content: '';
    display: block;
    position: absolute;
    top: -7px;
    width: 15px;
    height: 15px;
    border-radius: 2px;

    border-right: 1px solid ${colors.gray.light};
    border-bottom: 1px solid ${colors.gray.light};
    transform: rotate(-135deg);
    right: 5px;
  }
`;

export const Title = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${colors.gray.light};

  > span {
    font-size: 16px;

    > span {
      color: ${colors.pink.dark};
    }
  }
`;

export const Products = styled.div`
  max-height: 315px;
  overflow: scroll;
`;

export const Buttons = styled.div`
  /* background-color: red; */
  z-index: 50;
  border-top: 1px solid ${colors.gray.light};
  display: flex;
  justify-content: flex-end;
  padding: 15px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
