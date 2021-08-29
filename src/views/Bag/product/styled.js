import styled from 'styled-components';
import fonts from 'assets/fonts';
import { colors } from 'styles';

export const Container = styled.div`
  position: relative;

  :not(:last-child) {
    border-bottom: 1px solid ${colors.gray.light};
  }

  @media (max-width: 1040px) {
    width: 100%;
  }
`;

export const DeleteWrapper = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  position: absolute;
  top: 15px;
  right: 10px;
  z-index: 11;
  cursor: pointer;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductWrapper = styled.div`
  padding: 20px;
  display: flex;
`;

export const ProductImage = styled.div`
  width: 150px;
  height: 150px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.gray.light};
  margin-right: 25px;
  cursor: pointer;

  > img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    font-weight: ${fonts.sfPro.fontWeight.medium};
    font-size: 20px;
    padding-bottom: 20px;
  }
`;

export const ProductOptions = styled.div`
  display: flex;
`;

export const ProductOption = styled.div`
  margin-right: 33px;
  position: relative;
  > h2 {
    font-size: 16px;
    font-weight: ${fonts.sfPro.fontWeight.regular};
    margin-bottom: 5px;
  }
`;

export const Dropdown = styled.div`
  width: 110px;
  height: 25px;
  padding: 13px 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* border: solid 1px ${colors.gray.light};
  border-radius: 5px;
  border-bottom-left-radius: ${(props) => (props.isOpened ? '0px' : '5px')};
  border-bottom-right-radius: ${(props) => (props.isOpened ? '0px' : '5px')};
  border-bottom: ${(props) =>
    props.isOpened ? 'none' : `solid 1px ${colors.gray.light}`}; */

  > h2 {
    font-size: 16px;
    font-weight: ${fonts.sfPro.fontWeight.regular};
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 13px;
    width: 13px;
  }
`;

export const DropdownMenu = styled.div`
  width: 100%;
  position: absolute;
  border: 1px solid ${colors.gray.light};
  background-color: ${colors.white.primary};
  z-index: 10;
  top: 50px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: opacity 0.3s;
  display: flex;
  opacity: ${(props) => (props.isOpened ? '1' : '0')};
  transform: ${(props) =>
    props.isOpened ? 'translateX(0)' : 'translateX(-650px)'};
  flex-direction: column;

  > span {
    padding: 4px 10px;
    font-size: 14px;
    font-weight: ${fonts.sfPro.fontWeight.light};

    :hover {
      background-color: ${colors.gray.light};
      color: ${colors.pink.primary};
      display: flex;
    }
  }
`;

export const ProductPrice = styled.p`
  height: 20px;
  font-size: 18px;
  margin-top: 30px;
`;
