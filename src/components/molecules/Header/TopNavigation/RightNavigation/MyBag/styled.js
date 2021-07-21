import styled from 'styled-components';
import { colors } from 'styles';

export const ArrowHoverWrapper = styled.span`
  width: 100%;
  height: 23px;
  display: block;
  position: absolute;
  right: 3px;
  top: -23px;
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

export const SubTotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 40px;
  border-bottom: 1px solid ${colors.gray.light};
  border-top: 1px solid ${colors.gray.light};
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;
