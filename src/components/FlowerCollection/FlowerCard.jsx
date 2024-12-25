import React from 'react';

const FlowerCard = ({ name, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex justify-center items-center w-full h-48 bg-gray-100">
        <img src={image} alt={name} className="max-w-full max-h-full" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FlowerCard;
