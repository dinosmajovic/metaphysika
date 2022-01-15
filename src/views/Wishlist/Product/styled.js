import styled from 'styled-components';
import { colors } from 'styles';
import fonts from 'assets/fonts';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid ${colors.gray.light};
  justify-content: flex-start;
  align-items: center;
  min-height: 434px;
  min-width: 290px;

  @media (max-width: 350px) {
    min-width: 200px;
  }
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

  @media (max-width: 350px) {
    width: 200px;
  }
`;

export const ProductDescription = styled.div`
  width: 250px;
  font-size: 14px;
  font-weight: ${fonts.sfPro.fontWeight.ultraLight};

  @media (max-width: 350px) {
    width: 200px;
  }
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

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
