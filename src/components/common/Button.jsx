import React from 'react';

const Button = ({ children, onClick, className = '' }) => {
  return (
    <button 
      onClick={onClick}
      className={`bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;