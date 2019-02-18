/* eslint-disable import/default */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './routes';
import Header from './components/header';
import Footer from './components/footer';
import './styles/styles.css';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route component={Header} />
        <Route component={Routes} />
        <Route component={Footer} />
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
