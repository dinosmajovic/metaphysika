import styled from 'styled-components';
import { colors } from 'styles';

export const HeaderWrapper = styled.header`
  width: 100%;

  @media (max-width: 1024px) {
    padding: 10px;
    position: relative;
    border-bottom: 1px solid ${colors.gray.light};
  }
`;
