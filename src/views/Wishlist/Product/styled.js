import styled from 'styled-components';
import { colors } from 'styles';
import fonts from 'assets/fonts';

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid ${colors.gray.light};

  justify-content: flex-start;
  align-items: center;
`;

export const ProductImage = styled.div`
  display: flex;
  width: 250px;
  height: 250px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductDescription = styled.div`
  width: 250px;
  font-size: 14px;
  font-weight: ${fonts.sfPro.fontWeight.ultraLight};
`;

export const ProductName = styled.span`
  font-size: 23px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const DeleteProduct = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 5px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
