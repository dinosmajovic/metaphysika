import styled from 'styled-components';
import { colors } from 'styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0px;
  border-bottom: 1px solid ${colors.gray.light};
`;

export const Product = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`;

export const ProductImage = styled.div`
  width: 120px;
  margin-right: 20px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ProductDetails = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > h1,
  h2 {
    font-size: 16px;
  }
`;

export const Stock = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    font-size: 15px;
  }
`;
