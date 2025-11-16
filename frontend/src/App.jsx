import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import TaxFilingPage from './pages/TaxFilingPage';
import PaymentsPage from './pages/PaymentsPage';
import DocumentsPage from './pages/DocumentsPage';
import AppFooter from './components/AppFooter';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          {/* Public Route: Login page is the entry point */}
          <Route path="/" element={<LoginPage />} />
          
          {/* Protected Routes */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/tax-filing" element={<TaxFilingPage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
        </Routes>
      </div>
      <AppFooter />
    </Router>
  );
}

export default App;
