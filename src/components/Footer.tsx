// components/Footer.jsx
const Footer = () => {
    return (
      <footer className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex justify-between items-center px-12">
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-semibold mb-2">Visit</h3>
              <a href="#" className="text-blue-600">Social</a>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <a href="#" className="text-blue-600">Email</a>
            </div>
            <div className="flex flex-col items-end">
              <h3 className="text-xl font-semibold mb-2">Donate</h3>
            </div>
          </div>
          <div className="text-center text-gray-600 mt-16">
            2024 Engineering In Action - University of Alberta Chapter. All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;