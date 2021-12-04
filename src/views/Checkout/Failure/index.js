import Error from 'views/Error';

export const Failure = () => {
  return (
    <Error
      title="Error processing payment"
      description="Something went wrong, please try again."
    />
  );
};

export default Failure;
