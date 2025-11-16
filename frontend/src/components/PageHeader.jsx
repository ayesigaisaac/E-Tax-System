import React from 'react';

const PageHeader = ({ title, subtitle, actions }) => {
  return (
    <div className="page-header">
      <div>
        <h2 className="page-title">{title}</h2>
        {subtitle && <div className="page-subtitle">{subtitle}</div>}
      </div>
      {actions && <div>{actions}</div>}
    </div>
  );
};

export default PageHeader;
