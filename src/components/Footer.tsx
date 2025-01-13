const Footer = () => {
  return (
    <footer className="py-10 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-row justify-between items-center gap-8 md:gap-0 md:px-20 pr-3">
          <div className="flex flex-col items-center justify-center md:items-center w-full md:w-auto">
            <h3 className="text-xl font-semibold mb-2">Visit</h3>
            <a href="https://ca.linkedin.com/company/university-of-alberta-engineers-in-action" className="text-blue-600 mb-1 justify-center" target="_blank" rel="noopener noreferrer">Linkedin</a>
            <a href="https://www.instagram.com/uofaeia/?hl=en" className="text-blue-600 justify-center" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <div className="flex flex-col md:items-center items-center justify-center w-full md:w-auto">
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <a href="mailto:eia@ualberta.ca" className="text-blue-600">Email</a>          </div>
          <div className="flex flex-col items-center md:items-center w-full md:w-auto">
            <h3 className="text-xl font-semibold mb-2">Donate</h3>
            <a href="#" className="text-blue-600">Link Coming Soon!</a>
          </div>
        </div>
        <div className="text-center text-gray-600 mt-8 md:mt-16 text-sm md:text-base px-4">
          2025 Engineering In Action - University of Alberta Chapter. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
