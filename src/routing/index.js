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

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/404" component={Error} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/checkout/shipping" component={Shipping} />
      <Route exact path="/checkout/payment" component={Payment} />
      <Route exact path="/checkout/confirmation" component={Confirmation} />
      <Route exact path="/bag" component={Bag} />
      <Route exact path="/wishlist" component={Wishlist} />
      <Route exact path="/faq" component={Faq} />
      <Route exact path="/terms-of-service" component={Terms} />
      <Route exact path="/return-policy" component={ReturnPolicy} />
      <Route exact path="/privacy-policy" component={PrivacyPolicy} />
      <Route exact path="/size-guide" component={SizeGuide} />
      <Route
        exact
        path="/brands/:brandName?/:productName?"
        render={({ match }) => {
          const { brandName, productName } = match.params || {};

          if (brandName && productName) {
            return <Product />;
          }

          if (brandName && !productName) {
            return <Products />;
          }

          return <Error />;
        }}
      />
      <Route
        exact
        path="/categories/:categoryName?/:subcategoryName?"
        component={Products}
      />

      <Route path="*" exact component={Error} />
    </Switch>
  );
};

export default Routing;
