import {
  Container,
  Title,
  Dropdown,
  IconWrapper,
  DropdownItems,
  DropdownItem,
  DropdownItemList,
  AddressIconWrapper,
  AddressDropdown,
  AddressItem
} from './styled';
import arrowUp from 'assets/icons/filledArrowUp.svg';
import arrowDown from 'assets/icons/filledArrowDown.svg';
import { useEffect, useState } from 'react';

const Details = ({ order }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [addressIsOpen, setAddressIsOpen] = useState(false);
  const shippingInfo = order.shippingInfo;
  const { address } = shippingInfo;

  useEffect(() => {
    setIsOpen(false);
  }, [order.isOpen]);

  return (
    <Container>
      <Title onClick={() => setIsOpen(!isOpen)}>
        <h1>Details</h1>
        <IconWrapper>
          <img alt="icon" src={isOpen ? arrowUp : arrowDown} />
        </IconWrapper>
      </Title>
      <Dropdown isOpen={isOpen}>
        <DropdownItems>
          <DropdownItem>First name: {shippingInfo.firstName}</DropdownItem>
          <DropdownItem>Last name: {shippingInfo.lastName}</DropdownItem>
          <DropdownItem>Email: {shippingInfo.email}</DropdownItem>
          <DropdownItem>Phone: {shippingInfo.phoneNumber}</DropdownItem>
          <DropdownItem>Payment method: Offline</DropdownItem>
          <DropdownItem>Order id: 1397-435365-8669</DropdownItem>
          <DropdownItemList onClick={() => setAddressIsOpen(!addressIsOpen)}>
            <div>
              <span>Address</span>
              <AddressIconWrapper>
                <img alt="icon" src={addressIsOpen ? arrowUp : arrowDown} />
              </AddressIconWrapper>
            </div>
            <AddressDropdown addressIsOpen={addressIsOpen}>
              <AddressItem>City: {address.city}</AddressItem>
              <AddressItem>Country: {address.country}</AddressItem>
              <AddressItem>Line 1: {address.line1}</AddressItem>
              <AddressItem>Line 2: {address.line2}</AddressItem>
              <AddressItem>Zip: {address.zipCode}</AddressItem>
            </AddressDropdown>
          </DropdownItemList>
        </DropdownItems>
      </Dropdown>
    </Container>
  );
};

export default Details;
