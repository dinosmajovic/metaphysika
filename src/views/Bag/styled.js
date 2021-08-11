import styled from 'styled-components';
import { colors } from 'styles';
import fonts from 'assets/fonts';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1040px) {
    width: 60%;
    min-width: 600px;
    flex-direction: column;
    align-items: center;
  }
`;

export const MyBag = styled.div`
  margin-right: 40px;
  border: 1px solid ${colors.gray.light};
  border-radius: 5px;
  width: 620px;

  @media (max-width: 1040px) {
    width: 100%;
    margin-right: 0px;
    margin-bottom: 40px;
  }
`;

export const Title = styled.div`
  padding: 15px;
  border-bottom: 1px solid ${colors.gray.light};

  > span {
    font-size: 20px;

    > span {
      color: ${colors.pink.primary};
    }
  }
`;

export const Products = styled.div`
  max-height: 490px;
  overflow: scroll;
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${colors.gray.light};
  height: 250px;
  padding: 20px;
  border-radius: 5px;
  min-width: 320px;

  > span {
    font-size: 20px;
    padding-bottom: 40px;
  }

  @media (max-width: 1040px) {
    width: 100%;
  }
`;

export const Subtotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.gray.light};
  margin-bottom: 55px;
  font-size: 18px;
  padding-bottom: 5px;
`;

export const EmptyBag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 193px;

  > span {
    font-size: 23px;
    color: ${colors.pink.primary};
    font-weight: ${fonts.sfPro.fontWeight.regular};
  }
`;

export const ErrorMessage = styled.p`
  margin-top: 5px;
  color: rgba(246, 71, 71, 1);
  font-size: 15px;
`;
