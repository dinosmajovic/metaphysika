import styled from 'styled-components';

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  background-color: rgba(117, 117, 117, 70%);
  width: 100%;
  height: 100vh;
  z-index: 25;
`;

const Backdrop = ({ onCloseModal }) => {
  return <StyledBackdrop onClick={onCloseModal}></StyledBackdrop>;
};

export default Backdrop;
