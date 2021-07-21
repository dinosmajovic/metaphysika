import colors from 'styles/Colors';
import fonts from 'assets/fonts';
import styled from 'styled-components';

export const Title = styled.span`
  font-size: 17px;
  font-weight: ${fonts.sfPro.fontWeight.ultraLight};
  margin-bottom: 20px;
`;

export const RelatedProductsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const RelatedProduct = styled.div`
  border: solid 1px ${colors.gray.light};
  padding: 5px;
  width: 90px;
  height: 90px;
  display: block;
  text-align: center;
  cursor: pointer;
  margin-right: 15px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
