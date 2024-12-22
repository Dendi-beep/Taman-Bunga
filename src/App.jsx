import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import FlowerCollection from './components/FlowerCollection/FlowerCollection';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FlowerCollection />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;