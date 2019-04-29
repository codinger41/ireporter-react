/* eslint-disable react/jsx-no-bind */
/* eslint-disable import/named */
/* eslint-disable import/namespace */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import { successToast, failureToast } from '../actions/toast';
import { signupUser } from '../actions/auth';
import Spinner from '../components/spinner';
import 'react-toastify/dist/ReactToastify.css';

const fields = [
  { name: 'firstname', placeholder: 'first name', type: 'text' },
  { name: 'lastname', placeholder: 'last name', type: 'text' },
  { name: 'username', placeholder: 'username', type: 'text' },
  { name: 'email', placeholder: 'email', type: 'email' },
  { name: 'phonenumber', placeholder: 'phone', type: 'tel' },
  { name: 'password', placeholder: 'password', type: 'password' },
  { name: 'confirmPassword', placeholder: 'confirm password', type: 'password' },
];


const Signup = (props) => {
  const [userData, setUserData] = useState({
    username: null,
    firstname: null,
    lastname: null,
    email: null,
    phonenumber: null,
    password: null,
    confirmPassword: null
  });

  const [loading, setLoading] = useState(false);

  const updateInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const completeSignup = () => {
    props.signupUser(userData).then((res) => {
      const { error } = res;
      if (error) {
        setLoading(false);
        if (Array.isArray(error)) {
          return error.forEach(err => props.failureToast(err));
        }
        return props.failureToast(error);
      }
      props.history.push('/profile');
    });
  };

  const validateUserData = (e) => {
    e.preventDefault();
    setLoading(true);
    const fieldsArr = Object.entries(userData);
    const errors = [];
    fieldsArr.forEach((field) => {
      if (!field[1]) {
        errors.push(`${field[0]} is required.`);
        props.failureToast(`${field[0]} is required.`);
      }
    });
    return errors.length < 1 ? completeSignup() : setLoading(false);
  };


  return (
    <div className="boxes">
      <div className="welcome-box">
        <h1 className="welcome"> Welcome to iReporter!</h1>
      </div>
      <ToastContainer autoClose={5000} />
      <form className="signup-box">
        <h2> Sign Up </h2>
        {
            fields.map(field => (
              <input
                key={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                required
                onChange={e => updateInput(e)}
              />
            ))
          }
        <div className="btns">
          <button
            className="auth-button"
            onClick={e => validateUserData(e)}
            disabled={loading}
          >
            {
              loading ? <Spinner loading={loading} /> : <h3 className="signin-txt"> sign Up </h3>
            }
          </button>
        </div>
        <div className="socials">
          <p>
            Already have an account?
            <Link to="/signin"> Sign In </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

Signup.propTypes = {
  signupUser: PropTypes.func.isRequired,
  failureToast: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect(() => ({}), { successToast, failureToast, signupUser })(Signup);
