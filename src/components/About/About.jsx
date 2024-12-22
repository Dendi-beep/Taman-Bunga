import React from 'react';

const About = () => {
  return (
    <section id="tentang" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Tentang Taman Bunga Kami</h2>
          <p className="text-gray-600 mb-6">
            Taman Bunga Indah adalah surga bagi pecinta tanaman dan bunga. Didirikan pada tahun 2010,
            kami telah mengumpulkan berbagai jenis bunga dari seluruh Indonesia dan mancanegara.
          </p>
          <p className="text-gray-600">
            Kami berkomitmen untuk melestarikan keindahan alam dan memberikan pengalaman yang
            menakjubkan bagi setiap pengunjung yang datang ke taman kami.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;