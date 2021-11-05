import styled from 'styled-components';
import { colors } from 'styles';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: relative;

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

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const DeleteWrapper = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  position: absolute;
  top: 15px;
  right: 10px;
  z-index: 11;
  cursor: pointer;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
