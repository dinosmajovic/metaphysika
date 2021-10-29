import { OrderWrapper, Title, IconContainer, Dropdown } from './styled';
import Summary from './Summary';
import Bag from './Bag';
import Details from './Details';
import arrowUp from 'assets/icons/filledArrowUp.svg';
import arrowDown from 'assets/icons/filledArrowDown.svg';

const Order = ({ orders, order, setOrders }) => {
  const openDropdown = (id) => {
    if (!order.isOpen) {
      const mappedOrders = orders.map((o) => {
        return {
          ...o,
          isOpen: false
        };
      });

      const index = mappedOrders.findIndex((o) => o.id === id);
      mappedOrders[index].isOpen = true;

      setOrders(mappedOrders);
    } else {
      const mappedOrders = orders.map((o) => {
        return {
          ...o,
          isOpen: false
        };
      });

      setOrders(mappedOrders);
    }
  };

  return (
    <OrderWrapper>
      <Title onClick={() => openDropdown(order.id)}>
        <h1>Order: {order.orderDate}</h1>
        <IconContainer>
          {order.isOpen ? (
            <img src={arrowUp} alt="icon" />
          ) : (
            <img src={arrowDown} alt="icon" />
          )}
        </IconContainer>
      </Title>
      <Dropdown isOpen={order.isOpen}>
        <Summary order={order} />
        <Bag products={order.bagProducts} />
        <Details order={order} />
      </Dropdown>
    </OrderWrapper>
  );
};

export default Order;
