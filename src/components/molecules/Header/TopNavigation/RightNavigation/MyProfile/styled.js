import styled from 'styled-components';
import { colors } from 'styles';

export const ArrowHoverWrapper = styled.span`
  width: 100%;
  height: 23px;
  display: block;
  position: absolute;
  top: -15px;
  opacity: 0;
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
    background-color: ${(props) =>
      props.isHovered ? `${colors.gray.light}` : 'none'};
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

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;

  cursor: pointer;

  :hover {
    background-color: ${colors.gray.hover};
    > span {
      color: #e23f85;
    }
  }

  > span {
    font-size: 14px;
    padding: 10px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
