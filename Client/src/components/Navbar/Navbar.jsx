import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-12 w-12" />
          <h1 className="ml-2 text-xl font-bold text-pink-600">
            Rakshika
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

          <Link
            to="/login"
            className="border border-pink-600 text-pink-600 px-4 py-2 rounded"
          >
            Login
          </Link>

          <Link to="/signup" className="bg-pink-600 text-white px-4 py-2 rounded">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4">
          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

          <Link
            to="/login"
            className="border border-pink-600 text-pink-600 px-4 py-2 rounded text-center"
          >
            Login
          </Link>

          <button className="bg-pink-600 text-white px-4 py-2 rounded">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;