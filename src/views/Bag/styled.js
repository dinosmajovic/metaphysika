import styled from 'styled-components';
import { colors } from 'styles';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1040px) {
    width: 600px;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 670px) {
    width: 500px;
  }

  @media (max-width: 560px) {
    width: 90%;
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
  padding: 30px;
  border-radius: 5px;
  border: 1px solid ${colors.gray.light};
  width: 350px;
  height: fit-content;

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
  min-height: 190px;
  padding: 10px;

  > span {
    font-size: 23px;
    color: ${colors.pink.primary};

    @media (max-width: 600px) {
      font-size: 18px;
    }
  }
`;

export const ErrorMessage = styled.p`
  margin-top: 5px;
  color: ${colors.pink.primary};
  font-size: 15px;
`;
