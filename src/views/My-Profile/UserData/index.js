import {
  Container,
  Card,
  CardItem,
  Address,
  AddressItems,
  AddressItem,
  AddressTittle,
  IconWrapper,
  ButtonWrapper,
  BottomButton
} from './styled';
import filledArrowUp from 'assets/icons/filledArrowUp.svg';
import filledArrowDown from 'assets/icons/filledArrowDown.svg';
import { useState } from 'react';
import Button from 'components/atoms/Button/index';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { homePath } from 'constants/routes/index';

const UserData = ({ onOpenModal }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [addressDropdownIsOpen, setAddressDropdownIsOpen] = useState(false);

  const onToggleDropdown = () => {
    setAddressDropdownIsOpen(!addressDropdownIsOpen);
  };

  const onLogOut = () => {
    dispatch({ type: 'RESET_APP' });
    history.push(homePath);
  };

  return (
    <Container>
      <h1>My profile</h1>
      <Card>
        <CardItem>
          <span>First name:</span>
          <span>Emir</span>
        </CardItem>
        <CardItem>
          <span>Last name:</span>
          <span>Seremet</span>
        </CardItem>
        <CardItem>
          <span>Email:</span>
          <span>seremetemir1@gmail.com</span>
        </CardItem>
        <Address>
          <AddressTittle onClick={onToggleDropdown}>
            <span>Address</span>
            <IconWrapper>
              {addressDropdownIsOpen ? (
                <img src={filledArrowUp} alt="icon" />
              ) : (
                <img src={filledArrowDown} alt="icon" />
              )}
            </IconWrapper>
          </AddressTittle>
          <AddressItems addressDropdownIsOpen={addressDropdownIsOpen}>
            <AddressItem>
              <span>City:</span>
              <span>Sarajevo</span>
            </AddressItem>
            <AddressItem>
              <span>Country:</span>
              <span>Bosnia and Herzegovina</span>
            </AddressItem>
            <AddressItem>
              <span>Line1:</span>
              <span>Kemala Kapetanovica 30</span>
            </AddressItem>
            <AddressItem>
              <span>Line2:</span>
              <span></span>
            </AddressItem>
            <AddressItem>
              <span>Zip:</span>
              <span>71000</span>
            </AddressItem>
          </AddressItems>
        </Address>
        <ButtonWrapper>
          <Button size="small" onClick={() => onOpenModal('edit')}>
            EDIT
          </Button>
        </ButtonWrapper>
      </Card>
      <BottomButton onClick={() => onOpenModal('delete')}>
        Delete account
      </BottomButton>
      <BottomButton onClick={() => onOpenModal('changePassword')}>
        Change password
      </BottomButton>
      <BottomButton type="pink" onClick={onLogOut}>
        Log out
      </BottomButton>
    </Container>
  );
};

export default UserData;
