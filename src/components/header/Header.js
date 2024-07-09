import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../src/styles.css';
import './Header.css';

function Header() {
  const location = useLocation();

  // Verifica si la ruta actual es la de login
  const isLoginPage = location.pathname === '/login';

  return (
    <header className="header">
      <nav className="nav-menu">
        <Link to="/" className="logo">
          <svg
            style={{ width: '30px', height: '30px', marginRight: '8px' }}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
              fill="currentColor"
            ></path>
          </svg>
          CareerHub
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Features</Link></li>
          <li><Link to="/">Customers</Link></li>
          <li><Link to="/">Pricing</Link></li>
          <li><Link to="/">Resources</Link></li>
          <li><Link to="/">Company</Link></li>
        </ul>
        {!isLoginPage && <Link to="/login" className="login-button">Log in</Link>}
      </nav>
    </header>
  );
}

export default Header;
