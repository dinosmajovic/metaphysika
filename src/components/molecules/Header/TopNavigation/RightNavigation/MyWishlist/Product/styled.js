import styled from 'styled-components';
import { colors } from 'styles';
import fonts from 'assets/fonts';

export const Wrapper = styled.div`
  position: relative;
`;

export const ProductImage = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid ${colors.gray.light};
  background-color: ${colors.white.primary};

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  padding: 15px;
  align-items: flex-start;
  cursor: pointer;
  position: relative;

  :not(:last-child) {
    border-bottom: 1px solid ${colors.gray.light};
  }

  :hover {
    background-color: ${colors.gray.light};
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  margin-left: 20px;
  justify-content: space-between;
`;

export const ProductName = styled.span`
  font-size: 15px;
  font-weight: ${fonts.sfPro.fontWeight.medium};
`;

export const ProductPrice = styled.span`
  font-size: 15px;
  font-weight: ${fonts.sfPro.fontWeight.medium};
`;

export const DeleteWrapper = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  position: absolute;
  top: 14px;
  right: 10px;
  z-index: 11;
  cursor: pointer;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductDescription = styled.span`
  max-width: 150px;
  font-size: 12px;
`;
