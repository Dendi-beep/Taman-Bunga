import React, { useState } from "react";
import { FaLeaf, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-green-600 text-white p-4">
      <nav className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <FaLeaf className="text-2xl" />
          <h1 className="text-2xl font-bold">Taman Bunga Indah</h1>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute top-[70px] left-0 w-full bg-green-600 text-center lg:static lg:flex lg:space-x-6 lg:bg-transparent lg:text-left lg:w-auto ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <a
              href="#beranda"
              className="block py-2 px-4 lg:py-0 lg:px-0 hover:text-green-200"
            >
              Beranda
            </a>
          </li>
          <li>
            <a
              href="#koleksi"
              className="block py-2 px-4 lg:py-0 lg:px-0 hover:text-green-200"
            >
              Koleksi Bunga
            </a>
          </li>
          <li>
            <a
              href="#tentang"
              className="block py-2 px-4 lg:py-0 lg:px-0 hover:text-green-200"
            >
              Tentang Kami
            </a>
          </li>
          <li>
            <a
              href="#kontak"
              className="block py-2 px-4 lg:py-0 lg:px-0 hover:text-green-200"
            >
              Kontak
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
