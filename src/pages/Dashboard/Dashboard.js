import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la navegación
import config from '../../config';
import '../../styles.css';
import './Dashboard.css';

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Obtén la función navigate para la navegación

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${config.BASE_URL}/api/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserData(response.data);
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError(err.response?.data?.message || 'An error occurred while fetching data');
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login'); // Utiliza navigate para redirigir al usuario
  };

  if (error) {
    return <div className="dashboard" style={{ color: 'red' }}>{error}</div>;
  }

  if (!userData) {
    return <div className="dashboard">Loading...</div>;
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <button onClick={handleLogout} className="sign-out-btn">Sign Out</button>
      </div>
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Welcome</h3>
          <p>{userData.username}</p>
        </div>
        <div className="stat-card">
          <h3>Email</h3>
          <p>{userData.email}</p>
        </div>
      </div>
      <div className="dashboard-content">
        <h2>Your Activity</h2>
        <p>Here you can display more detailed information or additional features of your dashboard.</p>
      </div>
    </div>
  );
}

export default Dashboard;
