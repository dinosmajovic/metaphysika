import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Product from 'views/Product';
import Products from 'views/Products';
import Home from 'views/Home';
import About from 'views/About';
import Error from 'views/Error';
import Checkout from 'views/Checkout';
import Shipping from 'views/Checkout/Shipping';
import Payment from 'views/Checkout/Payment';
import Confirmation from 'views/Checkout/Confirmation';
import Bag from 'views/Bag';
import Wishlist from 'views/Wishlist';
import Faq from 'views/Faq';
import Terms from 'views/Terms';
import ReturnPolicy from 'views/Return-Policy';
import PrivacyPolicy from 'views/Privacy-Policy/';
import SizeGuide from 'views/Size-Guide';
import MyProfile from 'views/My-Profile';
import resetPassword from 'views/Reset-Password';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { initialize, clearError } from 'state/app';
import Loader from 'components/atoms/Loader';
import { LoaderWrapper } from 'components/atoms/Loader/styledWrapper';
import { onOpenLogInModal } from 'state/modal';

const PublicRoute = ({ component: Component, ...rest }) => {
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
      return (
        <Route exact render={(props) => <Component {...props} />} {...rest} />
      );
    }

    return () => {
      dispatch(clearError());
    };
  }, [isInitialized, error, history, dispatch, rest]);

  if (isInitialized && !isInitInProgress && !error) {
    return (
      <Route exact render={(props) => <Component {...props} />} {...rest} />
    );
  }

  return (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  );
};

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
      dispatch(onOpenLogInModal());
      history.push('/');
    }

    return () => {
      dispatch(clearError());
    };
  }, [isInitialized, error, history, dispatch]);

  if (isInitialized && !isInitInProgress && !error) {
    return (
      <Route exact render={(props) => <Component {...props} />} {...rest} />
    );
  }

  return (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  );
};

const Routing = () => {
  return (
    <Switch>
      <PrivateRoute path="/myProfile" component={MyProfile} />
      <PrivateRoute path="/wishlist" component={Wishlist} />
      <PublicRoute exact path="/" component={Home} />
      <PublicRoute exact path="/about" component={About} />
      <PublicRoute exact path="/404" component={Error} />
      <PublicRoute exact path="/checkout" component={Checkout} />
      <PublicRoute exact path="/checkout/shipping" component={Shipping} />
      <PublicRoute exact path="/checkout/payment" component={Payment} />
      <PublicRoute
        exact
        path="/checkout/confirmation"
        component={Confirmation}
      />
      <PublicRoute exact path="/bag" component={Bag} />
      <PublicRoute exact path="/faq" component={Faq} />
      <PublicRoute exact path="/terms-of-service" component={Terms} />
      <PublicRoute exact path="/return-policy" component={ReturnPolicy} />
      <PublicRoute exact path="/privacy-policy" component={PrivacyPolicy} />
      <PublicRoute exact path="/size-guide" component={SizeGuide} />
      <PublicRoute
        exact
        path="/resetPassword/:token?"
        component={resetPassword}
      />

      <PublicRoute
        exact
        path="/categories/:categoryName/:subcategoryName"
        component={Products}
      />

      <PublicRoute
        exact
        path="/brands/:brandName/name=:productName?"
        component={Product}
      />

      <PublicRoute
        exact
        path="/categories/:categoryName"
        component={Products}
      />

      <PublicRoute exact path="/brands/:brandName" component={Products} />

      <PublicRoute path="*" exact component={Error} />
    </Switch>
  );
};

export default Routing;
