import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 50px;
`;

export const MainImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 180px;
  background-color: #d9e4f5;
  background-image: linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%);

  > span {
    font-size: 30px;
    margin-bottom: 20px;
    color: gray;
  }
`;

export const Images = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  justify-items: center;
`;

export const Template = styled.div`
  width: 420px;
  height: 500px;
  cursor: pointer;
`;

export const Image = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    object-fit: fill;
    width: 100%;
    height: 100%;
  }
`;

export const Description = styled.div`
  background-color: ${({ color }) => color};
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    color: white;
  }
`;
