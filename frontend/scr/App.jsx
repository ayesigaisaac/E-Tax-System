// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
// import DashboardPage from './pages/DashboardPage'; // Will create later

function App() {
  return (
    <Router>
      <NavBar /> {/* A persistent header/nav bar across all pages */}
      <div className="container">
        <Routes>
          {/* Public Route: Login page is the entry point */}
          <Route path="/" element={<LoginPage />} />
          
          {/* Example of future pages */}
          {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
          {/* <Route path="/file-return" element={<ProtectedRoute><FilingPage /></ProtectedRoute>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;