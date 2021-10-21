import {
  Container,
  Card,
  CardItem,
  Address,
  AddressItems,
  AddressItem,
  AddressTittle
} from './styled';
import filledArrowUp from 'assets/icons/filledArrowUp.svg';
import filledArrowDown from 'assets/icons/filledArrowDown.svg';

const UserData = () => {
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
          <AddressTittle>Address</AddressTittle>
          <AddressItems>
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
              <span>Zip</span>
              <span>71000</span>
            </AddressItem>
          </AddressItems>
        </Address>
      </Card>
    </Container>
  );
};

export default UserData;
