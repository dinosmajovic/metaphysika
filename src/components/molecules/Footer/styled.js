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
`;

export const Line = styled.div`
  height: 1px;
  margin: 0px auto;
  background-color: ${colors.gray.light};
  width: 60%;
  margin-bottom: 30px;
`;
