import React from 'react';

const PrimaryButton = ({ children, variant = 'primary', className = '', ...props }) => {
  const classes = `btn btn-${variant} ${className}`.trim();
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default PrimaryButton;
