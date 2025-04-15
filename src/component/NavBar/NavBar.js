import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Startup Launchpad</div>
      <ul>
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/signin" className="sign-in">Sign In</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;