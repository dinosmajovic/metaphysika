import styled from 'styled-components';

export const Box = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  background-color: none;
  border: 1px solid #80868b;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CheckBox = ({ children, onBoxClick }) => {
  return <Box onClick={onBoxClick}>{children}</Box>;
};

export default CheckBox;
