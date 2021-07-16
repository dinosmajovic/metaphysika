import styled from 'styled-components';
import { colors } from 'styles';

const CopyRightWrapper = styled.div`
  text-align: center;

  > p {
    font-size: 12px;
    color: ${colors.pink.dark};
  }
`;

const Copyright = () => {
  return (
    <CopyRightWrapper>
      <p>&copy; Copyright. All rights reserved.</p>
    </CopyRightWrapper>
  );
};

export default Copyright;
