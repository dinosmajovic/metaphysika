import { Wrapper } from './styled';
import UserData from './UserData';
import Orders from './Orders';
import { useState } from 'react';
import Backdrop from 'components/atoms/Backdrop/index';
import Modal from './Modal';

const MyProfile = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const onOpenModal = (type) => {
    setModalIsOpen(true);
    setModalType(type);
  };

  const onCloseModal = () => {
    setModalIsOpen(false);
    setModalType('');
  };

  const onBackdropCloseModal = (event) => {
    event.target.className.includes('backdrop') && onCloseModal();
  };

  return (
    <Wrapper>
      {modalIsOpen && (
        <Backdrop onBackdropClick={onBackdropCloseModal}>
          <Modal type={modalType} onCloseModal={onCloseModal} />
        </Backdrop>
      )}
      <UserData onOpenModal={onOpenModal} />
      <Orders />
    </Wrapper>
  );
};

export default MyProfile;
