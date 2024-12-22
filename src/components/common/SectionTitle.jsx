import React from 'react';

const SectionTitle = ({ children, className = '' }) => {
  return (
    <h2 className={`text-3xl font-bold text-center mb-12 ${className}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;