import React, { useState } from "react";
import { Link } from "react-router-dom";


const fields = [
  { name: 'name', placeholder: 'name', type: 'text' },
  { name: 'email', placeholder: 'email', type: 'email' },
  { name: 'phone', placeholder: 'phone', type: 'tel' },
  { name: 'password', placeholder: 'password', type: 'password' },
  { name: 'confirmPassword', placeholder: 'confirm password', type: 'password' },
];


const Signup = () => {
  const [ userData, setUserData ] = useState({
    email: null,
    phone: null,
    password: null,
    confirmPassword: null
  });

  const updateInput = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="boxes">
      <div className="welcome-box">
        <h1 className="welcome"> Welcome to iReporter!</h1>
      </div>
      <form className="login-box">
        <h2> Sign Up </h2>
          {
            fields.map((field, index) => (
              <input
                key={index}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                required
                onChange={updateInput}
              />
            ))
          }
        <div className="btns">
          <button
            className="auth-button"
          >
            <h3 className="signin-txt"> sign Up </h3>
          </button>
        </div>
        <div className="socials">
          <p>Already have an account? <Link to="/signin"> Sign In </Link></p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
