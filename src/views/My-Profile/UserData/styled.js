import styled from 'styled-components';
import { colors } from 'styles';

export const Container = styled.div`
  width: 400px;
  margin-right: 400px;
  cursor: default;
  margin-bottom: 40px;

  > h1 {
    font-size: 25px;
    color: ${colors.pink.primary};
    margin-bottom: 15px;
  }

  @media (max-width: 1300px) {
    margin-right: 150px;
  }

  @media (max-width: 1000px) {
    margin-right: 50px;
  }

  @media (max-width: 900px) {
    margin-right: 0px;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const Card = styled.div`
  width: 100%;
  overflow: scroll;
  border: 1px solid ${colors.gray.light};
  padding: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const CardItem = styled.div`
  line-height: 35px;

  > :first-child {
    font-size: 17px;
    margin-right: 5px;
  }
`;

export const Address = styled.div`
  margin-top: 7px;
`;

export const AddressTittle = styled.div`
  display: flex;
  align-items: center;
  font-size: 17px;
  cursor: pointer;
  margin-bottom: 5px;
`;

export const AddressItems = styled.span`
  display: ${({ addressDropdownIsOpen }) =>
    addressDropdownIsOpen ? 'flex' : 'none'};
  flex-direction: column;
  margin-left: 15px;
`;

export const AddressItem = styled.span`
  font-size: 16px;
  line-height: 35px;

  > :first-child {
    margin-right: 5px;
  }
`;

export const IconWrapper = styled.div`
  width: 15px;
  height: 15px;
  margin-left: 5px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const BottomButton = styled.button`
  cursor: pointer;
  display: block;
  width: 100%;
  margin-top: 15px;
  font-size: 15px;
  border-radius: 5px;
  padding: 8px;
  color: ${({ type }) =>
    type === 'pink' ? 'white' : `${colors.pink.primary}`};
  background-color: ${({ type }) =>
    type === 'pink' ? `${colors.pink.primary}` : 'white'};
  border: 1px solid ${colors.pink.primary};

  :active {
    background-color: ${({ type }) =>
      type === 'pink' ? `${colors.pink.dark}` : `${colors.gray.light}`};
  }
`;
