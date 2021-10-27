import styled from 'styled-components';
import xIcon from 'assets/icons/modalClose.svg';
import ChangePassword from './ChangePassword';
import EditProfile from './EditProfile';
import DeleteAccount from './DeleteAccount';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/atoms/Loader/index';
import { Redirect } from 'react-router';
import { homePath } from 'constants/routes';
import { useEffect } from 'react';
import { resetMyProfileMessages } from 'state/user';

const Container = styled.div`
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  overflow: scroll;

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;

  > img {
    object-fit: cover;
    width: 100%;
    height: 100&;
  }
`;

const Modal = ({ onCloseModal, type }) => {
  const { isLoading, isDeleted } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetMyProfileMessages());
    };
  }, []);

  const switchModal = () => {
    switch (type) {
      case 'edit':
        return <EditProfile />;

      case 'delete':
        return <DeleteAccount onCloseModal={onCloseModal} />;

      case 'changePassword':
        return <ChangePassword />;

      default:
        return null;
    }
  };

  if (isDeleted) {
    return <Redirect to={homePath} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <Icon onClick={onCloseModal}>
        <img alt="icon" src={xIcon} />
      </Icon>
      {switchModal()}
    </Container>
  );
};

export default Modal;
