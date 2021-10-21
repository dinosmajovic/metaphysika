import styled from 'styled-components';
import { colors } from 'styles';
import fonts from 'assets/fonts';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
  border-top: ${({ type }) =>
    type === 'checkout' ? `1px solid ${colors.gray.light}` : 'none'};
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
  cursor: pointer;

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

  position: relative;

  :not(:last-child) {
    border-bottom: 1px solid ${colors.gray.light};
  }

  :hover {
    background-color: ${colors.gray.light};

    > ${ProductImage} {
      background-color: ${colors.white.primary};
    }
  }
`;

export const ProductInfo = styled.div`
  padding-left: ${({ type }) => (type === 'checkout' ? '25px' : '20px')};
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.span`
  font-size: 15px;
  font-weight: ${fonts.sfPro.fontWeight.medium};
`;

export const ProductOptions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  margin-bottom: 12px;

  > span {
    font-size: 13px;
    :not(:last-child) {
      margin-bottom: 5px;
    }
  }
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

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
