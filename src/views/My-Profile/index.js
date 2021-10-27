import { MyProfileWrapper } from './styled';
import UserData from './UserData';
import Orders from './Orders';
import { useEffect, useState } from 'react';
import Backdrop from 'components/atoms/Backdrop/index';
import Modal from './Modal';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Loader from 'components/atoms/Loader/index';
import { LoaderWrapper } from 'components/atoms/Loader/styledWrapper';
import { Redirect } from 'react-router';
import { errorPath } from 'constants/routes';

const MyProfile = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const { userData } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState(null);
  const [isError, setIsError] = useState(false);
  const { token } = useSelector((state) => state.user);

  useEffect(() => {
    // get  orders
    getOrders();
  }, []);

  const getOrders = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const { data } = await axios.get('/userOrders', {
        params: {
          token
        }
      });

      const mappedOrders = data.map((order) => {
        return {
          ...order,
          isOpen: false
        };
      });

      setOrders(mappedOrders);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
      setIsError(true);
    }
  };

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

  if (isError) {
    return <Redirect to={errorPath} />;
  }

  if (isLoading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }

  return (
    <MyProfileWrapper>
      {modalIsOpen && (
        <Backdrop onBackdropClick={onBackdropCloseModal}>
          <Modal type={modalType} onCloseModal={onCloseModal} />
        </Backdrop>
      )}
      <UserData onOpenModal={onOpenModal} userData={userData} />
      <Orders setOrders={setOrders} orders={orders} />
    </MyProfileWrapper>
  );
};

export default MyProfile;
