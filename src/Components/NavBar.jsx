import React, { useState } from "react";
import logo from "../assets/logo.png";
import { IoChevronDownOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0E0200] text-white shadow">
      <div className="max-w-8xl mx-auto px-4 py-4 flex items-center justify-between gap-1">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6 items-center">
          <span className="hover:text-blue-400 cursor-pointer">Home</span>
          <span className="hover:text-blue-400 cursor-pointer">About Us</span>
          <span className="hover:text-blue-400 cursor-pointer">Why Wangurus</span>
          <span className="hover:text-blue-400 cursor-pointer">Leadership</span>
          <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400">
            <span>Services</span>
            <IoChevronDownOutline />
          </div>
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden lg:block">
          <button className="bg-white text-black px-4 py-2 rounded-xl hover:bg-gray-200 transition">
            Contact Us
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-500 w-full px-10 rounded-4xl pb-4 space-y-4 shadow-xl/30">
          <span className="block hover:text-blue-400 cursor-pointer">Home</span>
          <span className="block hover:text-blue-400 cursor-pointer">About Us</span>
          <span className="block hover:text-blue-400 cursor-pointer">Why Wangurus</span>
          <span className="block hover:text-blue-400 cursor-pointer">Leadership</span>
          <div className="flex items-center gap-1 hover:text-blue-400 cursor-pointer">
            <span>Services</span>
            <IoChevronDownOutline />
          </div>
          <button className="bg-white text-black px-4 py-2 rounded-xl hover:bg-gray-200 transition">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};
