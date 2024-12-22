import React from 'react';
import { FaLeaf } from 'react-icons/fa';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <FaLeaf className="text-2xl" />
      <h1 className="text-2xl font-bold">Taman Bunga Indah</h1>
    </div>
  );
};

export default Logo;