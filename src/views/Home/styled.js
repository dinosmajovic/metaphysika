import styled from 'styled-components';
import { colors } from 'styles';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 3000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;
`;

export const Top = styled.div`
  width: 100%;
  position: relative;
`;

export const Middle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 20px 20px;
  width: 100%;

  @media (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const MiddleItem = styled.div`
  position: relative;
  background-image: url(${({ url }) => url});
  background-size: cover;
  cursor: pointer;
  height: 0;
  padding-bottom: 100%;
`;

export const Bottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 0 20px;
  width: 100%;
  padding-bottom: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const BottomItem = styled.div`
  position: relative;
  background-image: url(${({ url }) => url});
  background-size: cover;
  cursor: pointer;
  height: 0;
  padding-bottom: 60%;
`;

export const MainImg = styled.div`
  background-image: url(${({ url }) => url});
  padding-bottom: 30%;
  cursor: pointer;
  height: 0px;
  background-size: cover;
`;

export const Button = styled.div`
  color: ${colors.pink.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  width: 180px;
  height: 40px;
  background-color: white;
  border-radius: 7px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0);
  cursor: pointer;

  :active {
    background-color: ${colors.gray.light};
  }

  @media (max-width: 1300px) {
    font-size: 14px;
    width: 140px;
    height: 30px;
    border-radius: 5px;
  }

  @media (max-width: 1024px) {
    font-size: 12px;
    width: 120px;
    height: 30px;
    border-radius: 5px;
  }

  @media (max-width: 600px) {
    font-size: 10px;
    width: ${({ type }) => (type === 'small' ? '80px' : '120px')};
    height: ${({ type }) => (type === 'small' ? '20px' : '30px')};
    border-radius: 5px;
  }

  @media (max-width: 450px) {
    width: ${({ type }) =>
      type === 'top' || type === 'small' ? '80px' : '120px'};
    height: ${({ type }) =>
      type === 'top' || type === 'small' ? '20px' : '30px'};
    border-radius: 5px;
  }
`;
