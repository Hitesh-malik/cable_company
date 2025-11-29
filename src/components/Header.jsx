import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  const navigationLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/products", label: "Products" },
    { path: "/team", label: "Team" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* logo section */}
            <div className="flex items-center">
            {!isMenuOpen && (
              <Link to="/" className="flex items-center">
                <img src="/assets/img/logo.png" alt="Griptronics India Wires & Cables" className="h-10 sm:h-12" />
              </Link>
            )}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 xl:px-5 py-2 text-base xl:text-lg font-semibold transition-all duration-300 ${
                    isActive(link.path) ? "" : "text-gray-700"
                  }`}
                  style={isActive(link.path) ? { color: "#fcdb16" } : {}}
                  onMouseEnter={(e) => {
                    if (!isActive(link.path)) {
                      e.target.style.color = "#fcdb16";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(link.path)) {
                      e.target.style.color = "";
                    }
                  }}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 rounded-full"
                      style={{ backgroundColor: "#fcdb16" }}
                    ></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span
                  className={`absolute w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                    isMenuOpen ? "top-2 rotate-45" : "top-0"
                  }`}
                ></span>
                <span
                  className={`absolute top-2 w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                    isMenuOpen ? "top-2 -rotate-45" : "top-4"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu Slide Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 transform transition-transform duration-300 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center">
              <img src="/assets/img/logo.png" alt="Logo" className="h-10 sm:h-12" />
            </Link>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="p-4 sm:p-6">
          <nav className="space-y-1">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 ${
                  isActive(link.path) ? "" : "text-gray-700 hover:bg-gray-50"
                }`}
                style={
                  isActive(link.path)
                    ? { backgroundColor: "#fef3c7", color: "#fcdb16" }
                    : {}
                }
              >
                <span className="flex items-center">
                  {isActive(link.path) && (
                    <span
                      className="w-1 h-6 rounded-full mr-3"
                      style={{ backgroundColor: "#fcdb16" }}
                    ></span>
                  )}
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile CTA Button */}
          {/* <div className="mt-8">
            <Link
              to="/quote"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md"
            >
              Get a Quote
            </Link>
          </div> */}

          {/* Mobile Menu Footer */}
          <div className="mt-8 pt-8 border-t">
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.facebook.com/griptronicsindia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-100 hover:text-green-600 transition-colors"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/griptronicsindia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-100 hover:text-green-600 transition-colors"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/griptronics-india-wires-cables-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-100 hover:text-green-600 transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
