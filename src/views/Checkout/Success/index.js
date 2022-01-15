import Error from 'views/Error';

export const Failure = () => {
  return (
    <Error
      title="Payment done successfully"
      description="Your payment has been successfully processed."
    />
  );
};

export default Failure;
