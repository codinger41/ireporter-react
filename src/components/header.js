/* eslint-disable react/jsx-no-bind */
/* eslint-disable import/named */
/* eslint-disable import/namespace */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../actions/auth';

const Header = (props) => {
  const { user, isLoggedIn } = props;
  const { isadmin } = user;

  const logout = () => {
    props.logOut();
    props.history.push('/');
  };

  return (
    <nav className="navbar">
      <span className="navbar-toggle" id="js-navbar-toggle">
        <i className="fas fa-bars" />
      </span>
      <Link to="/" className="logo"><h1 className="title"> iReporter </h1></Link>
      <ul className="main-nav" id="js-menu">
        <li>
          <Link to="/" className="nav-links">Home</Link>
        </li>
        { !isLoggedIn
          && (
          <li>
            <Link to="/signin" className="nav-links">Sign in</Link>
          </li>
          )
        }
        { !isLoggedIn
          && (
          <li>
            <Link to="/signup" className="nav-links">Sign up</Link>
          </li>
          )
        }
        {
         isadmin
          && (
          <li>
            <Link to="/admin" className="nav-links">Admin</Link>
          </li>
          )
        }
        {
          isLoggedIn
          && (
          <li>
            <Link to="/new-record" className="nav-links">New record</Link>
          </li>
          )
        }
        {
          isLoggedIn
          && (
          <li>
            <Link to="/profile" className="nav-links">My Profile</Link>
          </li>
          )
        }
        {
          isLoggedIn
          && (
          <li>
            <a href="#" onClick={() => logout()} className="nav-links">Logout</a>
          </li>
          )
        }
      </ul>
    </nav>
  );
};

const mapStateToProps = state => ({
  user: state.authReducer.user,
  isLoggedIn: state.authReducer.isLoggedIn
});

export default connect(() => mapStateToProps, { logOut })(Header);
