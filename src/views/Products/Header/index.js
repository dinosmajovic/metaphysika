import {
  Wrapper,
  SortContainer,
  Line,
  IconWrapper,
  Container,
  SortOptions
} from './styled';
import arrowDown from 'assets/icons/arrowDown.svg';

const Sort = ({ brandName }) => {
  return (
    <Wrapper>
      <h1>{brandName}</h1>
      <SortContainer>
        <Container>
          <span>SORT</span>
          <IconWrapper>
            <img src={arrowDown} alt="Arrow" />
          </IconWrapper>
        </Container>
        <Line />
        <SortOptions>
          <span>Price Low To High</span>
          <span>Price High To Low</span>
        </SortOptions>
      </SortContainer>
    </Wrapper>
  );
};

export default Sort;
