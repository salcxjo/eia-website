// components/Navbar/Navbar.tsx
import React from 'react';

interface NavbarProps {
  logoSrc: string;
  logoAlt?: string;
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc, logoAlt = "Logo" }) => {
  return (
    <>
      <nav className="fixed top-0 z-50 bg-white w-full p-6 sm:px-6 lg:px-8">
        <div className="w-full mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo - changed to anchor tag with #top */}
            <a href="#top" className="flex-shrink-0">
              <img
                src={logoSrc}
                alt={logoAlt}
                className="h-12 w-auto"
              />
            </a>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
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
        </div>
      </nav>
      {/* Spacer div to prevent content from going under navbar */}
      <div className="h-24"></div>
    </>
  );
};

export default Navbar;