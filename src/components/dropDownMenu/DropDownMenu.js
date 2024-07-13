import React from "react";
import { Link } from "react-router-dom";
import "./DropDownMenu.css";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para la navegación
import { useAuth0 } from "@auth0/auth0-react";

const DropDownMenu = ({ isOpen, signOut, onClose }) => {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();

  return (
    <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
      <div className="dropdown-content">
        <ul>
          {user && !isLoading && (
            <p style={{ color: "black" }}>  Hi {user.given_name}</p>
          )}

          <li>
            <Link to="/my-plan">My Plan</Link>
          </li>
          <li>
            <Link to="/my-settings">My Settings</Link>
          </li>
          <li>
            <Link to="/myAccount">My Profile</Link>
          </li>
          {user && !isLoading && (
            <button onClick={() => logout()}>Log out</button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DropDownMenu;
