import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Search */}
      {isSearchOpen && (
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center">
              <i className="fa fa-search text-gray-600 mr-3"></i>
              <input
                type="text"
                className="flex-1 border-none outline-none text-gray-800"
                placeholder="Search"
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-gray-600 hover:text-gray-900 ml-3"
              >
                <i className="fa fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden mr-4 text-gray-800"
            >
              <i className="fa fa-bars text-xl"></i>
            </button>
            <Link to="/" className="flex items-center">
              <img src="/assets/img/logo.png" alt="Logo" className="h-12" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <Link
                to="/"
                className="text-gray-800 hover:text-primary font-bold text-xl flex items-center"
              >
                Home
              </Link>
            </div>
            <Link
              to="/about"
              className="text-gray-800 hover:text-primary font-bold text-xl"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-800 hover:text-primary font-bold text-xl"
            >
              Services
            </Link>
            <div className="relative group">
              <Link
                to="/products"
                className="text-gray-800 hover:text-primary font-bold text-xl flex items-center"
              >
                Products
                <i className="fa fa-chevron-down ml-1 text-xs"></i>
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link
                  to="/products"
                  className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-gray-900"
                >
                  Products
                </Link>
                <Link
                  to="/product-details"
                  className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-gray-900"
                >
                  Products Details
                </Link>
              </div>
            </div>
            <Link
              to="/team"
              className="text-gray-800 hover:text-primary font-bold text-xl"
            >
              Team
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-primary font-bold text-xl"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t mt-4 pb-4">
            <div className="flex items-center justify-between mb-4">
              <img src="/assets/img/logo.png" alt="Logo" className="h-10" />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-800"
              >
                <i className="fa fa-times text-xl"></i>
              </button>
            </div>
            <div className="space-y-2">
              <Link
                to="/"
                className="block py-2 text-gray-800 hover:text-primary font-bold text-xl"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block py-2 text-gray-800 hover:text-primary font-bold text-xl"
              >
                About
              </Link>
              <Link
                to="/services"
                className="block py-2 text-gray-800 hover:text-primary font-bold text-xl"
              >
                Services
              </Link>
              <Link
                to="/products"
                className="block py-2 text-gray-800 hover:text-primary font-bold text-xl"
              >
                Products
              </Link>
              <Link
                to="/team"
                className="block py-2 text-gray-800 hover:text-primary font-bold text-xl"
              >
                Team
              </Link>
              <Link
                to="/contact"
                className="block py-2 text-gray-800 hover:text-primary font-bold text-xl"
              >
                Contact
              </Link>
              <Link
                to="/quote"
                className="block bg-primary text-gray-900 px-6 py-2 rounded font-bold text-xl text-center mt-4"
              >
                get a quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
