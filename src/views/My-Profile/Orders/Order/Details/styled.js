import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 18px;
    margin-right: 5px;
  }
`;
export const IconWrapper = styled.div`
  width: 13px;
  height: 13px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Dropdown = styled.div`
  width: 100%;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const DropdownItems = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
`;

export const DropdownItem = styled.span`
  margin-bottom: 10px;
  font-size: 16px;
`;

export const DropdownItemList = styled.div`
  position: relative;
`;

export const AddressIconWrapper = styled.div`
  width: 13px;
  height: 13px;
  position: absolute;
  top: 1px;
  right: 155px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const AddressDropdown = styled.div`
  margin-top: 5px;
  width: fit-content;
  display: ${({ addressIsOpen }) => (addressIsOpen ? 'block' : 'none')};
  margin-left: 20px;
`;

export const AddressItem = styled.span`
  display: block;
  margin-bottom: 8px;
  font-size: 15px;
`;
