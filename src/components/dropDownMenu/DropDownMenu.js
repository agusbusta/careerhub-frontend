import React from 'react';
import { Link } from 'react-router-dom';
import './DropDownMenu.css';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la navegación


const DropDownMenu = ({ isOpen, signOut, onClose }) => {
    if(isOpen){
        console.log("llego el is open")
    }
  return (
    <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
      <div className="dropdown-content">
        <ul>
          <li><Link to="/my-plan">My Plan</Link></li>
          <li><Link to="/my-settings">My Settings</Link></li>
          <li><Link to="/my-profile">My Profile</Link></li>
          <li><Link to="/login" onClick={signOut}>Sign Out</Link></li>

        </ul>
      </div>
    </div>
  );
}

export default DropDownMenu;