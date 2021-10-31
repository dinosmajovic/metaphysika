import styled from 'styled-components';
import fonts from 'assets/fonts/index';

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  > span {
    font-weight: ${fonts.sfPro.fontWeight.medium};
    font-size: 18px;

    @media (max-width: 400px) {
      font-size: 15px;
    }
  }
`;

export const DeleteWrapper = styled.div`
  width: 20px;
  height: 20px;
  display: flex;

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

export const ProductOptions = styled.div`
  display: flex;
`;

export const ProductOption = styled.div`
  margin-right: 33px;

  > h2 {
    font-size: 16px;
    font-weight: ${fonts.sfPro.fontWeight.regular};

    @media (max-width: 400px) {
      font-size: 15px;
    }
  }

  @media (max-width: 400px) {
    margin-right: 15px;
  }
`;

export const ProductPrice = styled.p`
  font-size: 18px;

  @media (max-width: 400px) {
    font-size: 16px;
  }

  @media (max-width: 400px) {
    font-size: 15px;
  }
`;
