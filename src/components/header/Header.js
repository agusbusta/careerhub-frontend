import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles.css";
import "./Header.css";
import DropDownMenu from "../dropDownMenu/DropDownMenu";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();

  useEffect(() => {
    setIsMenuOpen(false); 
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    logout({ returnTo: window.location.origin }); // Agrega la lógica de logout de Auth0
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Verifica si hay un token almacenado en localStorage
  const token = localStorage.getItem("token");

  // Verifica si la ruta actual es la de dashboard
  const isDashboardPage = location.pathname === "/dashboard";
  const isHome = location.pathname === "/"

  return (
    <header className="header">
      <nav className="nav-menu">
        <Link to="/" className="logo">
          <svg
            style={{ width: "30px", height: "30px", marginRight: "8px" }}
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
        {isHome || token ? (
          <ul className="nav-links">
            <li>
              <Link to="/">Features</Link>
            </li>
            <li>
              <Link to="/">Customers</Link>
            </li>
            <li>
              <Link to="/">Pricing</Link>
            </li>
            <li>
              <Link to="/">Resources</Link>
            </li>
            <li>
              <Link to="/">Company</Link>
            </li>
          </ul>
           ) : (
          <></>
       
        )}
        {!user && !isLoading && (
          <button
            className="btn btn-primary btn-block"
            onClick={() => loginWithRedirect()}
          >
            Sign In
          </button>
        )}
        
        {user && (
          <div className="dropdown-container">
  
            <button
              className="profile-button"
              style={{ border: "none", backgroundColor: "transparent" }}
              onClick={toggleMenu}
            >
              
              <img
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%", // Asegúrate de que la imagen sea redonda
                }}
                src={user.picture}
                alt="Profile"
                className="profile-image"
              />
              <>▼</>     
            </button>
            <DropDownMenu
              isOpen={isMenuOpen}
              signOut={handleLogout}
              onClose={closeMenu}
            />
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
