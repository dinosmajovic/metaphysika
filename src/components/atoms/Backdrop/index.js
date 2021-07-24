import styled from 'styled-components';

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  background-color: rgba(117, 117, 117, 70%);
  width: 100%;
  height: 100vh;
  z-index: 25;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = ({ onBackdropCloseModal, children }) => {
  return (
    <StyledBackdrop className="backdrop" onClick={onBackdropCloseModal}>
      {children}
    </StyledBackdrop>
  );
};

export default Backdrop;
