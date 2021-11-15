import { ButtonsWrapper, Button } from './styled';
const Pagination = ({
  totalProductsCount,
  productsPerPage,
  paginate,
  page
}) => {
  const buttonNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProductsCount / productsPerPage); i++) {
    buttonNumbers.push(i);
  }

  return (
    <ButtonsWrapper>
      {buttonNumbers.map((number) => {
        return (
          <Button
            key={number}
            onClick={() => paginate(number)}
            isClicked={number === page}
          >
            <span>{number}</span>
          </Button>
        );
      })}
    </ButtonsWrapper>
  );
};

export default Pagination;
