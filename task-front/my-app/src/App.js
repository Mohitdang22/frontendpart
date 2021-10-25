import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import User from './User';
import Userdata from './Userdata';
import Product from './Product';
import Productdata from './Productdata';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={User} />
      <Route exact path="/userdata" component={Userdata} />
      <Route exact path="/product" component={Product} />
      <Route exact path="/productdata" component={Productdata} />
      <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
