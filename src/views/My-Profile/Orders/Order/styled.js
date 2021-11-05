import styled from 'styled-components';
import { colors } from 'styles';

export const OrderWrapper = styled.div`
  border: 1px solid ${colors.gray.light};

  width: 100%;
  border-radius: 7px;
  position: relative;
  cursor: pointer;
  overflow: scroll;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  > h1 {
    font-size: 17px;
    color: ${colors.pink.primary};
  }
`;

export const Dropdown = styled.div`
  width: 100%;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  margin-top: 15px;
  padding: 10px;
`;

export const IconContainer = styled.div`
  width: 13px;
  height: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;

  > img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
