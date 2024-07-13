// MyAccount.js

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import CircularProgress from "@mui/material/CircularProgress"; // Importa CircularProgress de Material-UI
import "./MyAccount.css";

function MyAccount() {
  const { user, isLoading } = useAuth0();
  console.log(user)

  if (isLoading) {
    return (
      <div className="my-account-loading">
        <CircularProgress size={80} thickness={4} /> {/* Ajusta el tamaño y grosor según tus preferencias */}
      </div>
    );
  }

  if (!user) {
    return <div className="my-account">User information not available.</div>;
  }

  return (
    <div className="my-account">
      <h2>My Account</h2>
      <div className="user-info">
      <div className="imgcont">
      <img className="image-account" src={user.picture} /> 
      </div>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Suscription Plan:</strong> {user.email}</p>
        <p><strong>Payment method:</strong> {user.email}</p>
        <p>Want to edit your suscription plan / payment method? <strong>Click here!</strong></p>
        <br></br>
        <hr></hr>
        <br></br>
        <button className="btn" style={{backgroundColor: 'red', color: 'white'}}>Delete Account</button>
        {/* Otros detalles de la cuenta que desees mostrar */}
      </div>
    </div>
  );
}

export default MyAccount;
