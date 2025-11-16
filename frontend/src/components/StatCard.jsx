import React from 'react';

const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="stat-card d-flex align-items-center">
      <div className="me-3" style={{ fontSize: 28, color: color || 'var(--brand-primary)' }}>
        {icon}
      </div>
      <div>
        <div className="stat-value">{value}</div>
        <div className="stat-label">{title}</div>
      </div>
    </div>
  );
};

export default StatCard;
