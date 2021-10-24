import styled from 'styled-components';

const StyledBackdrop = styled.div`
  position: fixed;
  background-color: rgba(117, 117, 117, 70%);
  width: 100%;
  height: 100%;
  z-index: 40;
  position: fixed;
  left: 0px;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = ({ onBackdropClick, children }) => {
  return (
    <StyledBackdrop className="backdrop" onClick={onBackdropClick}>
      {children}
    </StyledBackdrop>
  );
};

export default Backdrop;
