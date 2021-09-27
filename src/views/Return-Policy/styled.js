import styled from 'styled-components';
import fonts from 'assets/fonts';
import { colors } from 'styles';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: 70%;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    > :first-child {
      font-size: 22px;
      margin-bottom: 15px;
      color: ${colors.pink.primary};
    }

    > :nth-child(2) {
      font-size: 18px;
      margin-bottom: 20px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 26px;
  margin: 20px 0px;
  color: ${colors.pink.primary};
`;

export const List = styled.ul`
  list-style: none;
  font-size: 18px;

  > li {
    font-weight: ${fonts.sfPro.fontWeight.regular};
    :not(:last-child) {
      margin-bottom: 20px;
    }

    ::before {
      content: '•';
      color: ${colors.pink.primary};
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }
`;
