import React from 'react';
import FlowerCard from './FlowerCard';
import { flowers } from '../../data/flowers';

const FlowerCollection = () => {
  return (
    <section id="koleksi" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Koleksi Bunga Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flowers.map((flower) => (
            <FlowerCard key={flower.id} {...flower} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlowerCollection;