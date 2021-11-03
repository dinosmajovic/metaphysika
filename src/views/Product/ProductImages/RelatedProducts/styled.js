import { colors } from 'styles';
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
  flex-wrap: wrap;
`;

export const RelatedProduct = styled.div`
  border: solid 1px ${colors.gray.light};
  padding: 5px;
  width: 90px;
  height: 90px;
  display: block;
  text-align: center;
  cursor: pointer;
  margin: 15px 0px;

  :not(:last-child) {
    margin-right: 15px;
  }

  :hover,
  :active {
    border: solid 1px ${colors.pink.primary};
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
