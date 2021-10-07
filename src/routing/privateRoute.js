import { Route } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { initialize, clearError } from 'state/app';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isInitialized, isInitInProgress, error } = useSelector(
    (state) => state.app
  );

  useEffect(() => {
    if (!isInitialized && !isInitInProgress) {
      dispatch(initialize());
    }
  }, [dispatch, isInitInProgress, isInitialized]);

  useEffect(() => {
    if (isInitialized && error) {
      history.push('/?login=true');
      history.push('/');
    }

    return () => {
      dispatch(clearError());
    };
  }, [isInitialized, error, history]);

  if (isInitialized && !isInitInProgress && !error) {
    return (
      <Route exact render={(props) => <Component {...props} />} {...rest} />
    );
  }

  return <div>loading</div>;
};

export default PrivateRoute;
