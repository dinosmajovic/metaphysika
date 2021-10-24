import styled from 'styled-components';

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  background-color: rgba(117, 117, 117, 70%);
  width: 100%;
  height: 100%;
  z-index: 25;
  position: fixed;
  left: 0px;
  top: 0px;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`;

const Backdrop = ({ onBackdrop, isOpen }) => {
  return <StyledBackdrop onClick={onBackdrop} isOpen={isOpen}></StyledBackdrop>;
};

export default Backdrop;
