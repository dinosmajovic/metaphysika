import styled from 'styled-components';
import fonts from 'assets/fonts';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;

  padding-top: 20px;
`;

export const MainImage = styled.div`
  cursor: pointer;
  background-image: url('https://res.cloudinary.com/metaphysika/image/upload/v1629976384/11196274_1110770282270222_7479338547200342749_n_gi16kk.jpg');
  background-size: cover;
  width: 100%;
  height: 0px;
  padding-bottom: 40%;
  display: flex;
  justify-content: center;
  position: relative;

  > div {
    position: absolute;

    top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > span {
      font-size: 35px;
      font-weight: ${fonts.sfPro.fontWeight.bold};
      color: white;
      margin-bottom: 10px;
    }
  }
`;

export const MiddleImages = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5%;
`;

export const BottomImages = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5%;
`;

export const MiddleImage = styled.div`
  width: 32.5%;
  height: 450px;
  background-size: cover;
  background-image: url(${({ url }) => url});
  height: 0px;
  padding-bottom: 40%;
  display: flex;
  justify-content: center;
  position: relative;
  cursor: pointer;

  > span {
    color: white;
    position: absolute;
    font-weight: ${fonts.sfPro.fontWeight.bold};
    font-size: 30px;
    letter-spacing: 5px;
    bottom: 20px;
  }
`;

export const BottomImage = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  cursor: pointer;
  background-image: url(${({ url }) => url});
  background-size: cover;
  width: 49.3%;
  height: 0px;
  padding-bottom: 30%;

  > span {
    color: white;
    position: absolute;
    font-weight: ${fonts.sfPro.fontWeight.bold};
    font-size: 30px;
    letter-spacing: 5px;
    bottom: 20px;
  }
`;
