import styled from 'styled-components';
import { colors } from 'styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 30px;
`;

export const Title = styled.span`
  font-size: 27px;
  margin-bottom: 15px;

  > span {
    color: ${colors.pink.dark};
  }
`;

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`;

export const EmptyWishlistWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  > span {
    margin-top: 20px;
    font-size: 28px;
    color: ${colors.pink.primary};
  }
`;

export const ErroMessage = styled.span`
  display: block;
  margin-bottom: 20px;
  font-size: 20px;
  color: ${colors.pink.primary};
`;

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
