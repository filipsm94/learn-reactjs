import React from 'react';
import Layout from './components/Layout/layout';
import BurgerBuilder from './containers/burgerBuilder/burgerBuilder';
import Checkout from './containers/checkout/checkout';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" component={BurgerBuilder} exact></Route>
          <Route path="/checkout" component={Checkout}></Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
