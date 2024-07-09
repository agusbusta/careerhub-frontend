// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const login = (email, password) => {
  return axios.post(`${API_URL}/auth/login`, { email, password });
};

export const register = (username, email, password) => {
  return axios.post(`${API_URL}/auth/register`, { username, email, password });
};

// Añade más funciones para otras rutas de la API