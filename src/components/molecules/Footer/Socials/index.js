import styled from "styled-components";

import Logos from "./Logos";
import Copyright from "./Copyright";

const Container = styled.div`
  width: 190px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Socials = () => {
  return (
    <Container>
      <Logos />
      <Copyright />
    </Container>
  );
};

export default Socials;
