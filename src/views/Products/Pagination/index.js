import { ButtonsWrapper, Button } from './styled';

const Buttons = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const numbers = pageNumbers.map((num) => {
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

export default Buttons;
