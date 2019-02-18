/* eslint-disable import/no-unresolved */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/home';

const Router = () => (
  <div>
    <Switch>
      <Route path='/' component={Home} />
    </Switch>
  </div>
)

export default Router;
