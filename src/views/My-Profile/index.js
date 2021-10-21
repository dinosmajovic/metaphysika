import { Wrapper } from './styled';
import UserData from './UserData';
import Orders from './Orders';

const MyProfile = () => {
  return (
    <Wrapper>
      <UserData />
      <Orders />
    </Wrapper>
  );
};

export default MyProfile;
