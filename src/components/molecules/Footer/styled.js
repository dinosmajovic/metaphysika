import styled from 'styled-components';
import { colors } from 'styles';

export const FooterContainer = styled.footer`
  width: 100%;
  border: 1px solid ${colors.gray.light};
  padding: 20px;
  padding-top: 30px;
  position: relative;
  margin-top: auto;

  > nav {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  @media (max-width: 600px) {
    padding: 15px;

    > nav {
      margin-bottom: 0px;
    }
  }
`;

export const Line = styled.div`
  height: 1px;
  margin: 0px auto;
  background-color: ${colors.gray.light};
  width: 60%;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    display: none;
  }
`;
