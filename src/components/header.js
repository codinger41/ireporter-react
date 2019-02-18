import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
return(
    <nav className='navbar'>
    <span className='navbar-toggle' id='js-navbar-toggle'>
        <i className='fas fa-bars'></i>
    </span>
    <Link to='/' className='logo'><h1 className='title'> iReporter </h1></Link>
    <ul className='main-nav' id='js-menu'>
      <li>
          <Link to='/' className='nav-links'>Home</Link>
      </li>
      <li>
          <Link to='/signin' className='nav-links'>Sign in</Link>
      </li>
      <li>
          <Link to='/signup' className='nav-links'>Sign up</Link>
      </li>
      <li>
          <Link to='/admin' className='nav-links'>Admin</Link>
      </li>
      <li>
          <Link to='/new-record' className='nav-links'>New record</Link>
      </li>
      <li>
          <Link to='/profile' className='nav-links'>My Profile</Link>
      </li>
      <li>
          <Link to='/' className='nav-links'>Logout</Link>
      </li>
    </ul>
    </nav>
  );
};

export default Header;
