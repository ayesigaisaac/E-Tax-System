// API service for authentication
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || '/api';

export const login = async (tin, password) => {
    const response = await axios.post(`${API_URL}/auth/login`, {
        tin,
        password
    });
    return response.data;
};

export const register = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
};

// Add token to all requests if it exists
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);