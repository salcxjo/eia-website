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
          <div className="flex items-center justify-between">
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
              className="md:hidden p-2 text-gray-600 hover:text-blue-600"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>

            {/* Desktop Navigation */}
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

          {/* Mobile Menu */}
          <div
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } md:hidden flex-col items-center pt-4 pb-2 space-y-4`}
          >
            <a 
              href="#about" 
              className="w-full text-center py-2 text-black hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="w-full text-center py-2 text-black hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects & Activities
            </a>
            <a 
              href="#get-involved" 
              className="w-full text-center py-2 text-black hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Involved
            </a>
            <a 
              href="#contact" 
              className="w-full text-center py-2 text-black hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full max-w-[200px]">
              DONATE
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer div - adjusted for mobile */}
      <div className="h-16 md:h-24"></div>
    </>
  );
};

export default Navbar;