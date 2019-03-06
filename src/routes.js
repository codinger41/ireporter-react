/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./containers/home";
import Signup from "./containers/signup";
import Signin from "./containers/signin";
import Admin from "./containers/admin";
import Profile from './containers/profile';
import NewRecord from "./containers/new-record";
import RequiresAuth from "./components/authWrapper";

const Router = props => {
  const { user } = props;
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <RequiresAuth path="/profile" 
          auth={user.hasOwnProperty('username')} 
          component={Profile}
        />
        <RequiresAuth path="/admin" 
          auth={user.hasOwnProperty('isadmin') && user.isadmin === true} 
          component={Profile}
        />
        <RequiresAuth path="/new-record" 
          auth={user.hasOwnProperty('username')} 
          component={NewRecord} 
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.authReducer.user,
  };
};

export default connect(() => mapStateToProps, {})(Router);
