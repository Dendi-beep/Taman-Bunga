import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Taman Bunga Indah</h3>
            <p className="text-green-200">Menyajikan keindahan alam untuk Anda</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-2xl hover:text-green-200"><FaFacebook /></a>
            <a href="#" className="text-2xl hover:text-green-200"><FaInstagram /></a>
            <a href="#" className="text-2xl hover:text-green-200"><FaTwitter /></a>
          </div>
        </div>
        <div className="mt-8 text-center text-green-200">
          <p>&copy; 2023 Taman Bunga Indah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;