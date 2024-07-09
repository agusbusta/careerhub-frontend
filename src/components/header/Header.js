import React from 'react';
import { Link } from 'react-router-dom';
import '../../../src/styles.css';
import './Header.css'

function Header() {
  return (
    <header className="header">
      <nav className="nav-menu">
        <Link to="/" className="logo">CareerHub</Link>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;