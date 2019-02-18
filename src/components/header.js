import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <nav className='navbar'>
      <span className='navbar-toggle' id='js-navbar-toggle'>
        <i className='fas fa-bars'></i>
      </span>
      <Link to='index.html' className='logo'><h1 className='title'> iReporter </h1></Link>
      <ul className='main-nav' id='js-menu'>
          <li>
              <Link to='index.html' className='nav-links'>Home</Link>
          </li>
          <li>
            <Link to='sign-in.html' className='nav-links'>Sign in</Link>
          </li>
          <li>
              <Link to='sign-up.html' className='nav-links'>Sign up</Link>
          </li>
          <li>
              <Link to='admin.html' className='nav-links'>Admin</Link>
          </li>
          <li>
              <Link to='new-record.html' className='nav-links'>New record</Link>
          </li>
          <li>
              <Link to='profile.html' className='nav-links'>My Profile</Link>
          </li>
          <li>
              <Link to='sign-up.html' className='nav-links'>Logout</Link>
          </li>
      </ul>
    </nav>
  );
};

export default Header;
