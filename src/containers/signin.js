import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div className='boxes'>
      <div className='welcome-box'>
        <h1 className='welcome'> Welcome to iReporter!</h1>
      </div>
        <form className='login-box'>
          <h2> Sign In </h2>
          <input 
            type='email'
            placeholder='Email'
            required
          />
          <input
            type='password'
            placeholder='Password'
            required
          />
          <div className='btns'>
            <button
              className='auth-button'
            >
              <h3 className='signin-txt'> sign in </h3>
            </button>
          </div>
          <div className='socials'>
            <p>New here? <Link to='/signup'> Sign Up </Link></p>
          </div>
      </form>
    </div>
  );
};

export default Signin;
