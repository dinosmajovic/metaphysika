import {
  Wrapper,
  SortContainer,
  Line,
  IconWrapper,
  Container,
  SortOptions,
  SortOption
} from './styled';
import arrowDown from 'assets/icons/arrowDown.svg';

const Sort = ({ label, sortOptions, onSortProducts, sortType }) => {
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
          {sortOptions.map((sort) => (
            <SortOption
              key={sort.sortType}
              isClicked={sort.sortType === sortType}
              onClick={() => onSortProducts(sort.sortType)}
            >
              {sort.label}
            </SortOption>
          ))}
        </SortOptions>
      </SortContainer>
    </Wrapper>
  );
};

export default Sort;
