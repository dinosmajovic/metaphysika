import styled from 'styled-components';
import fonts from 'assets/fonts';
import { colors } from 'styles';

export const Container = styled.div`
  position: relative;
  border: ${({ type }) =>
    type === 'success' ? `1px solid ${colors.pink.primary}` : 'none'};
  background-color: ${({ type }) =>
    type === 'success' ? 'white' : 'rgb(246, 225, 203)'};
  border-radius: 5px;
  width: 100%;
  padding: 10px 15px;

  margin-bottom: 15px;
`;

export const CloseMessageWrapper = styled.span`
  width: 15px;
  height: 15px;
  display: ${({ type }) => (type === 'success' ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 5px;
  top: 7px;
  cursor: pointer;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ErrorTitle = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  > span:first-child {
    width: ${({ type }) => (type === 'success' ? '21px' : '15px')};
    height: ${({ type }) => (type === 'success' ? '21px' : '15px')};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 7px;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  > span:nth-child(2) {
    font-size: 16px;
    font-weight: ${fonts.sfPro.fontWeight.bold};
    color: ${({ type }) =>
      type === 'success' ? `${colors.pink.primary}` : 'rgb(191, 115, 38)'};
  }
`;

export const ErrorDescription = styled.span`
  font-size: 14px;
  font-weight: ${fonts.sfPro.fontWeight.light};
`;
