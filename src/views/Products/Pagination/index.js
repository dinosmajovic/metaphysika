import { ButtonsWrapper, Button } from './styled';
const Pagination = ({
  totalProductsCount,
  productsPerPage,
  paginate,
  currentPage
}) => {
  const buttonNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProductsCount / productsPerPage); i++) {
    buttonNumbers.push(i);
  }

  const numbers = buttonNumbers.map((num) => {
    return {
      number: num,
      isClicked: false
    };
  });

  if (numbers.length > 0) {
    numbers[currentPage - 1].isClicked = true;
  }

  return (
    <ButtonsWrapper>
      {numbers.map((n) => {
        return (
          <Button
            key={n.number}
            onClick={() => paginate(n.number)}
            isClicked={n.isClicked}
          >
            <span>{n.number}</span>
          </Button>
        );
      })}
    </ButtonsWrapper>
  );
};

export default Pagination;
