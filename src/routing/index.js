import { Route, Switch } from 'react-router-dom';

import Product from 'views/Product';
import Products from 'views/Products';
import Home from 'views/Home';
import About from 'views/About';
import Error from 'views/Error';

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/404" component={Error} />
      {/* <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/contact" component={Contact} />
      <Route path="/return-policy" component={ReturnPolicy} /> */}

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

          return <div>404 not found</div>;
        }}
      />

      <Route
        exact
        path="/categories/:categoryName?/:subCategoryName?"
        component={Products}
      />
    </Switch>
  );
};

export default Routing;
