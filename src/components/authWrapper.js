/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from "react-router-dom";


export default ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => auth === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/signin', state: { from: props.location }}} />}
    />
  );
};
