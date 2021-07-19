import styled from 'styled-components';
import { colors } from 'styles';

export const ProductContainer = styled.div`
  > p {
    font-size: 20px;
  }
`;

export const Picture = styled.div`
  border: solid 1px ${colors.gray.light};
  padding: 40px;
  position: relative;
  height: 290px;
  display: block;
  text-align: center;
  margin-bottom: 20px;
  cursor: pointer;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Heart = styled.div`
  height: 22px;
  width: 22px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  right: 10px;
  bottom: 8px;
  z-index: 10;
`;

export const Label = styled.p`
  margin-bottom: 10px;
`;

export const PictureContainer = styled.div`
  position: relative;
`;
