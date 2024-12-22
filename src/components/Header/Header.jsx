import React from 'react';
import { FaLeaf } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-green-600 text-white p-4">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FaLeaf className="text-2xl" />
          <h1 className="text-2xl font-bold">Taman Bunga Indah</h1>
        </div>
        <ul className="flex space-x-6">
          <li><a href="#beranda" className="hover:text-green-200">Beranda</a></li>
          <li><a href="#koleksi" className="hover:text-green-200">Koleksi Bunga</a></li>
          <li><a href="#tentang" className="hover:text-green-200">Tentang Kami</a></li>
          <li><a href="#kontak" className="hover:text-green-200">Kontak</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;