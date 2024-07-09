import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';
import config from '../../config';
import './Login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post(`${config.BASE_URL}/api/auth/login`, {
        email,
        password
      });

      if (response.status === 200 && response.data.access_token) {
        localStorage.setItem('token', response.data.access_token);
        navigate('/dashboard');
      }
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message || 'An error occurred during the login');
      } else {
        setError('An error occurred during login');
      }
    }
  };

  return (
    <> 
    <div className="login-form">
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Login</button>
      </form>

    </div>
    <div className="join-container">
      <Link to="/register"><p className="account-link">Join CareerHub today</p></Link>

    </div>
      </>
    );
}

export default Login;