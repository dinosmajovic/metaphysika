import {
  Wrapper,
  SortContainer,
  Line,
  IconWrapper,
  Container,
  SortOptions
} from './styled';
import arrowDown from 'assets/icons/arrowDown.svg';

const Sort = ({ label, productsList, setProductsList }) => {
  const onSortHighToLow = () => {
    const sortedProducts = productsList.sort((el1, el2) => {
      return el1.price - el2.price;
    });

    const mappedSortedProducts = sortedProducts.map((el) => {
      return el;
    });

    setProductsList(mappedSortedProducts);
  };
  const onSortLowToHigh = () => {
    let sortedProducts = productsList.sort((el1, el2) => {
      return el2.price - el1.price;
    });

    const mappedSortedProducts = sortedProducts.map((el) => {
      return el;
    });

    setProductsList(mappedSortedProducts);
  };

  return (
    <Wrapper>
      <h1>{label}</h1>
      <SortContainer>
        <Container>
          <span>SORT</span>
          <IconWrapper>
            <img src={arrowDown} alt="Arrow" />
          </IconWrapper>
        </Container>
        <Line />
        <SortOptions>
          <span onClick={onSortLowToHigh}>Price Low To High</span>
          <span onClick={onSortHighToLow}>Price High To Low</span>
        </SortOptions>
      </SortContainer>
    </Wrapper>
  );
};

export default Sort;
