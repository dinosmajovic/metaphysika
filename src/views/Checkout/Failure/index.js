import { useDispatch, useSelector } from 'react-redux';

import Error from 'views/Error';
import { setIsIsPaymentFailedStep } from 'state/checkout';
import { useEffect } from 'react';

export const Failure = () => {
  const dispatch = useDispatch();
  const { isPaymentFailedStep } = useSelector((state) => state.checkout);

  useEffect(() => {
    return () => {
      dispatch(setIsIsPaymentFailedStep(false));
    };
  }, [dispatch]);

  return (
    <Error
      title="Payment processing error!"
      description={`${
        isPaymentFailedStep
          ? `${isPaymentFailedStep}`
          : 'Something went wrong, please try again later.'
      } `}
    />
  );
};

export default Failure;
