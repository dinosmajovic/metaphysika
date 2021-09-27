import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  background-color: royalblue;

  > div {
    width: 100%;
  }
`;

const OrderMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: yellowgreen;
  padding: 10px 0px;

  > span {
    margin-bottom: 10px;
  }
`;

const OrderTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const DeliveryDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
  background-color: orangered;

  > span {
    margin-bottom: 10px;
  }
`;

const DeliveryTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const ProductsList = styled.div`
  background-color: palevioletred;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Product = styled.div`
  display: flex;
`;

const ProductImage = styled.div`
  width: 130px;
  height: 160px;
  background-color: red;
  margin-right: 10px;
`;

const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;

  > span:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Prices = styled.div`
  padding: 10px 0px;
  background-color: peachpuff;
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PriceDescription = styled.span`
  margin-right: 20px;
`;

const Template = () => {
  const products = useSelector((state) => state.bag.products);
  console.log(products);
  return (
    <Container>
      <OrderMessage>
        <OrderTitle>IT’S ORDERED!</OrderTitle>
        <span>Hi Emir, your order has been received.</span>
        <span>Order No.: 590700114</span>
        <span>Order date: 22 Feb 2021</span>
      </OrderMessage>
      <DeliveryDetails>
        <DeliveryTitle>DELIVERY ADDRESS</DeliveryTitle>
        <span>Emir Seremet</span>
        <span>Obala Kulina Bana 32</span>
        <span>Sarajevo 71000</span>
        <span>Bosnia And Herzegovina</span>
        <span>38762853568</span>
      </DeliveryDetails>
      <ProductsList>
        <Product>
          <ProductImage></ProductImage>
          <ProductDescription>
            <span>Victoria Sponge</span>
            <span>120 BAM</span>
            <span>Size 36 / Qty 1</span>
          </ProductDescription>
        </Product>
      </ProductsList>
      <Prices>
        <Price>
          <PriceDescription>SUB-TOTAL</PriceDescription>
          <span>40 BAM</span>
        </Price>
        <Price>
          <PriceDescription>DELIVERY</PriceDescription>
          <span>10 BAM</span>
        </Price>
        <Price>
          <PriceDescription>TOTAL</PriceDescription>
          <span>50 BAM</span>
        </Price>
      </Prices>
    </Container>
  );
};

export default Template;
