import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  logoSrc: string;
  logoAlt?: string;
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc, logoAlt = "Logo" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 bg-white w-full p-4 md:p-6">
        <div className="w-full mx-auto px-2 md:px-4">
          {/* Main navbar content */}
          <div className="flex items-center justify-between relative">
            {/* Logo */}
            <a href="#top" className="flex-shrink-0">
              <img
                src={logoSrc}
                alt={logoAlt}
                className="h-8 md:h-12 w-auto"
              />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-600 hover:text-blue-600 z-50"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-black hover:text-blue-600">
                About
              </a>
              <a href="#projects" className="text-black hover:text-blue-600">
                Projects & Activities
              </a>
              <a href="#get-involved" className="text-black hover:text-blue-600">
                Get Involved
              </a>
              <a href="#contact" className="text-black hover:text-blue-600">
                Contact Us
              </a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                DONATE
              </button>
            </div>
          </div>

          {/* Mobile Menu - Separate from desktop menu */}
          <div 
            className={`md:hidden fixed inset-x-0 top-0 bg-white shadow-lg transition-all duration-300 ease-in-out z-40 ${
              isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <div className={`flex flex-col items-center pt-20 pb-6 transition-all duration-500 ease-in-out ${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}>
              <a 
                href="#about" 
                className="w-full text-center py-3 text-black hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#projects" 
                className="w-full text-center py-3 text-black hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects & Activities
              </a>
              <a 
                href="#get-involved" 
                className="w-full text-center py-3 text-black hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Involved
              </a>
              <a 
                href="#contact" 
                className="w-full text-center py-3 text-black hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-64 mt-2">
                DONATE
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer div */}
      <div className="h-16 md:h-24"></div>
    </>
  );
};

export default Navbar;