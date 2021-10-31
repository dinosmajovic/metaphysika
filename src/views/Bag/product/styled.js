import styled from 'styled-components';
import { colors } from 'styles';

export const Container = styled.div`
  :not(:last-child) {
    border-bottom: 1px solid ${colors.gray.light};
  }

  @media (max-width: 1040px) {
    width: 100%;
  }
`;

export const ProductWrapper = styled.div`
  padding: 20px;
  display: flex;

  @media (max-width: 1040px) {
    display: flex;
    height: fit-content;
  }

  @media (max-width: 600px) {
    padding: 10px;
    height: 140px;
  }

  @media (max-width: 400px) {
    padding: 10px;
  }
`;

export const ProductImage = styled.div`
  width: 150px;
  height: 150px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.gray.light};
  margin-right: 25px;
  cursor: pointer;

  > img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 600px) {
    width: 100px;
    height: 100%;
  }

  @media (max-width: 400px) {
    margin-right: 10px;
  }
`;
