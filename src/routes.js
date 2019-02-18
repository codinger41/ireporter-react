/* eslint-disable import/no-unresolved */
import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/home";
import Signup from "./containers/signup";
import Signin from "./containers/signin";
import Admin from "./containers/admin";
import Profile from './containers/profile';
import NewRecord from "./containers/new-record";

const Router = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/new-record" component={NewRecord} />
    </Switch>
  </div>
);

export default Router;
