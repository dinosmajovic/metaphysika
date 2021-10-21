import styled from 'styled-components';
import { colors } from 'styles';

export const Container = styled.div`
  margin-right: 700px;

  > h1 {
    font-size: 30px;
    color: ${colors.pink.primary};
  }
`;

export const Card = styled.div`
  width: fit-content;
`;

export const CardItem = styled.div``;

export const Address = styled.div``;

export const AddressTittle = styled.div``;

export const AddressItems = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

export const AddressItem = styled.span``;
