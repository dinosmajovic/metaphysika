import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const LayoutWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default LayoutWrapper;
