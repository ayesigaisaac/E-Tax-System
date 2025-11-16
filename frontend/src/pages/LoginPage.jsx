import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';
import { loginStart, loginSuccess, loginFailure } from '../redux/slices/authSlice';

const LoginPage = () => {
  const [tin, setTin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector(state => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    
    try {
      const data = await login(tin, password);
      dispatch(loginSuccess({ 
        user: { tin: data.tin, fullName: data.fullName },
        token: data.token 
      }));
      navigate('/dashboard');
    } catch (err) {
      dispatch(loginFailure(err.response?.data?.message || 'Login failed'));
    }
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
          <button type="submit" className="btn btn-primary w-100 mt-3">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
