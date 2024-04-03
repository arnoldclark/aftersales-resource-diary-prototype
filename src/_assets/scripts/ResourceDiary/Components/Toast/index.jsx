import React from 'react';

const Toast = ({className, children}) => (
  <div className={`ch-alert ch-alert--success ${className}`}>
    {children}
  </div>
);

export default Toast;