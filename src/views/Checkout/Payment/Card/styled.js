import styled from 'styled-components';
import { colors } from 'styles';

export const CardContainer = styled.div`
  border-radius: 5;
  border: 1px solid ${colors.gray.light};
  border-radius: 10px;
  margin-bottom: 35px;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.gray.light};
  padding: 15px 20px;

  > h1 {
    font-size: 20px;
  }

  > span {
    display: flex;

    > span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 25px;

      :not(:last-child) {
        margin-right: 10px;
      }

      > img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const FormContainer = styled.div`
  padding: 20px;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    width: calc(50% - 10px);
  }
`;
