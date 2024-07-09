import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../styles.css';
import './Header.css';
import DropDownMenu from '../dropDownMenu/DropDownMenu';
import picprofile from '../../assets/profilepic.png';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false); // Cierra el menú cuando cambia la ubicación
  }, [location.pathname]);

  const toggleMenu = () => {
    console.log("Toggle menu called");
    setIsMenuOpen(!isMenuOpen); // Cambia el estado de 'isMenuOpen'
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login'); // Utiliza navigate para redirigir al usuario
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Cierra el menú
  };

  // Verifica si hay un token almacenado en localStorage
  const token = localStorage.getItem('token');

  // Verifica si la ruta actual es la de dashboard
  const isDashboardPage = location.pathname === '/dashboard';

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
        {isDashboardPage || token ? (
          <ul className="nav-links">
            <li><Link to="/interview-practice">Interview Practice</Link></li>
            <li><Link to="/job-searcher">Job Searcher</Link></li>
            <li><Link to="/cv-builder">Ai-CV</Link></li>
            <li><Link to="/community">Community</Link></li>
          </ul>
        ) : (
          <ul className="nav-links">
            <li><Link to="/">Features</Link></li>
            <li><Link to="/">Customers</Link></li>
            <li><Link to="/">Pricing</Link></li>
            <li><Link to="/">Resources</Link></li>
            <li><Link to="/">Company</Link></li>
          </ul>
        )}
        {!token && !isDashboardPage && (
          <Link to="/login" className="login-button">Log in</Link>
        )}
        {token && (
          <div className="dropdown-container">
            <button className="profile-button" style={{border: 'none', backgroundColor: 'transparent'}} onClick={toggleMenu}>
              <img style={{ width: '40px', height: '40px', backgroundColor: 'none'}} src={picprofile} alt="Profile" className="profile-image" />
            </button>
            <DropDownMenu isOpen={isMenuOpen} signOut={handleLogout} onClose={closeMenu} /> {/* Pasa el estado isOpen y la función onClose */}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
