import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/layout';
import BurgerBuilder from './containers/burgerBuilder/burgerBuilder';
import Checkout from './containers/checkout/checkout';
import Orders from './containers/checkout/orders/orders';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" component={BurgerBuilder} exact></Route>
          <Route path="/checkout" component={Checkout}></Route>
          <Route path="/orders" component={Orders}></Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
