import styled from 'styled-components';
import Order from './Order';
import { colors } from 'styles';

const Container = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-size: 25px;
    color: ${colors.pink.primary};
    margin-bottom: 15px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
const OrdersContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h2 {
    font-size: 20px;
    color: ${colors.pink.primary};
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Orders = ({ orders, setOrders }) => {
  if (orders?.length < 1) {
    return (
      <Container>
        <h1>My orders</h1>
        <OrdersContainer>
          <h2>You don't have any orders.</h2>
        </OrdersContainer>
      </Container>
    );
  }

  return (
    <Container>
      <h1>My orders</h1>
      <OrdersContainer>
        {orders?.map((order) => (
          <Order
            orders={orders}
            order={order}
            key={order.id}
            setOrders={setOrders}
          />
        ))}
      </OrdersContainer>
    </Container>
  );
};

export default Orders;
