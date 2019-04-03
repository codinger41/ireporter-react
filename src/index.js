/* eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import jwt from 'jsonwebtoken';
import { createStore, applyMiddleware, compose } from 'redux';
import { CURRENT_USER } from './actions/actionTypes';
import Routes from './routes';
import Header from './components/header';
import Footer from './components/footer';
import rootReducer from './reducers/rootReducer';
import './styles/styles.css';
import 'font-awesome/css/font-awesome.css';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

const { token } = localStorage;
if (token) {
  store.dispatch({
    type: CURRENT_USER,
    user: jwt.decode(token)
  });
}

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route component={Header} />
        <Route component={Routes} />
        <Route component={Footer} />
      </div>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
