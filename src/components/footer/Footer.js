import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="nav-links">
          <li>
            <Link to="/">Pricing</Link>
          </li>
          <li>
            <Link to="/">Resources</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
        </ul>
        <p>&copy; 2024 CareerHub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
