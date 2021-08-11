import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Checkout = () => {
  const history = useHistory();

  useEffect(() => {
    history.push('/checkout/shipping');
  }, []);

  return null;
};

export default Checkout;
