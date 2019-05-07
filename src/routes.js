/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './containers/home';
import Signup from './containers/signup';
import Signin from './containers/signin';
import Profile from './containers/profile';
import NewRecord from './containers/new-record';
import RequiresAuth from './components/authWrapper';
import Edit from './containers/edit-record';
import NotFound from './containers/404';

const Router = (props) => {
  const { isLoggedIn, user } = props;
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/404" component={NotFound} />
        <Route exact path="/signin" component={Signin} />
        <RequiresAuth
          path="/profile"
          auth={isLoggedIn}
          component={Profile}
        />
        <RequiresAuth
          path="/edit/:type/:id"
          auth={isLoggedIn}
          component={Edit}
        />
        <RequiresAuth
          path="/admin"
          auth={isLoggedIn && user.isadmin === true}
          component={Profile}
        />
        <RequiresAuth
          path="/new-record"
          auth={isLoggedIn}
          component={NewRecord}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.authReducer.isLoggedIn,
  user: state.authReducer.user
});

export default connect(() => mapStateToProps, {})(Router);
