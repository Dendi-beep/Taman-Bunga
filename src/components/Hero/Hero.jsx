import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[600px]">
      <div className="absolute inset-0 bg-[url('/images/garden-bg.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative container mx-auto h-full flex items-center justify-center text-white text-center">
        <div>
          <h1 className="text-5xl font-bold mb-4">Selamat Datang di Taman Bunga Kami</h1>
          <p className="text-xl mb-8">Temukan keindahan dan keajaiban alam dalam koleksi bunga-bunga eksotis kami</p>
          <button className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors">
            Jelajahi Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;