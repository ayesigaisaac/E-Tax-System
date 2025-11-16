// src/pages/LoginPage.jsx

import React, { useState } from 'react';
// import { useDispatch } from 'react-redux'; // Will use later for Redux actions
// import axios from 'axios'; // Will use later for API calls

const LoginPage = () => {
  const [tin, setTin] = useState(''); // Taxpayer Identification Number
  const [password, setPassword] = useState('');
  // const dispatch = useDispatch(); // Initialize the dispatch function

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt for TIN:', tin);
    // TODO: Implement actual API call using axios and dispatch a Redux action
    
    // Example placeholder:
    // dispatch(loginUser({ tin, password })); 
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="card p-4" style={{ width: '400px' }}>
        <h3 className="card-title text-center mb-4">URA Taxpayer Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="tin" className="form-label">TIN (Tax ID)</label>
            <input
              type="text"
              className="form-control"
              id="tin"
              value={tin}
              onChange={(e) => setTin(e.target.value)}
              required
            />
          </div>
          <div className="mb-3"> 
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-3">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;