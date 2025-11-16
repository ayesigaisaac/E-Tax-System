import React from 'react';

const AppFooter = () => {
  return (
    <footer className="app-footer">
      <div className="container">
        <div>© {new Date().getFullYear()} E-Tax System — Built for secure and simple tax filing</div>
      </div>
    </footer>
  );
};

export default AppFooter;
