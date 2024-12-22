import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="kontak" className="py-16 bg-green-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Hubungi Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <FaPhone className="text-3xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Telepon</h3>
            <p className="text-gray-600">+62 123 4567 890</p>
          </div>
          <div className="text-center">
            <FaEnvelope className="text-3xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">info@tamanbunga.com</p>
          </div>
          <div className="text-center">
            <FaMapMarkerAlt className="text-3xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lokasi</h3>
            <p className="text-gray-600">Jl. Bunga Indah No. 123<br />Jakarta, Indonesia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;