import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AboutProps {
  galleryImage1: string;
  galleryImage2: string;
  galleryImage3: string;
  galleryImage4: string;
}

const About: React.FC<AboutProps> = ({ galleryImage1, galleryImage2, galleryImage3, galleryImage4 }) => {
  const ref1 = useScrollAnimation();
  const ref2 = useScrollAnimation();
  const ref3 = useScrollAnimation();
  const ref4 = useScrollAnimation();

  return (
    <div className="w-full">
      {/* First Gallery Section */}
      <div 
        ref={ref1} 
        className="flex flex-col md:flex-row justify-between items-center w-full overflow-hidden px-4 md:px-7 pt-8 md:pt-16 opacity-0 gap-2 md:gap-4"
      >
        <div className="w-full md:w-1/3 p-2 md:p-4">
          <img
            src={galleryImage1}
            className="w-full h-48 md:h-[300px] object-cover rounded-2xl"
            alt="Gallery 1"
          />
        </div>
        <div className="w-full md:w-2/5 p-2 md:p-4">
          <img
            src={galleryImage2}
            className="w-full h-48 md:h-[300px] object-cover rounded-2xl"
            alt="Gallery 2"
          />
        </div>
      </div>

      {/* First About Section */}
      <div ref={ref2} className="flex flex-col md:flex-row p-4 md:p-10 justify-between items-center opacity-0 gap-4 md:gap-0">
        <div className="flex flex-col w-full md:w-1/3 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl">ABOUT</h1>
          <h1 className="text-2xl md:text-4xl text-blue-700 pt-3 md:pt-6">Engineer In Action</h1>
        </div>
        <p className="text-xl md:text-3xl w-full md:w-1/2 font-medium">
          We work with under-served communities and global partners to execute sustainable engineering projects that build local capacity and improve access to essential resources.
        </p>
      </div>

      {/* Second Gallery Section */}
      <div 
        ref={ref3} 
        className="flex flex-col md:flex-row justify-between items-end w-full overflow-hidden px-4 md:px-7 pt-6 md:pt-10 opacity-0 gap-2 md:gap-4"
      >
        <div className="w-full md:w-5/12 p-2 md:p-4">
          <img
            src={galleryImage3}
            className="w-full h-48 md:h-[300px] object-cover rounded-2xl"
            alt="Gallery 3"
          />
        </div>
        <div className="w-full md:w-1/3 p-2 md:p-4">
          <img
            src={galleryImage4}
            className="w-full h-48 md:h-[300px] object-cover rounded-2xl"
            alt="Gallery 4"
          />
        </div>
      </div>

      {/* Second About Section */}
      <div ref={ref4} className="flex flex-col md:flex-row p-4 md:p-10 justify-between items-center opacity-0 gap-4 md:gap-0">
        {/* Title section - appears first on mobile */}
        <div className="order-1 md:order-2 items-center md:items-end flex flex-col w-full md:w-1/3 mb-4 md:mb-0">
          <h1 className="text-4xl md:text-6xl">ABOUT</h1>
          <h1 className="text-2xl md:text-4xl text-green-700 pt-3 md:pt-6 text-center md:text-right">
            University Of Alberta Chapter
          </h1>
        </div>
        {/* Description text - appears second on mobile */}
        <p className="order-2 md:order-1 text-xl md:text-3xl w-full md:w-1/2 font-medium text-center md:text-left">
          We adhere to our parent organization and devote ourselves for the greater good of local communities and the world
        </p>
      </div>
    </div>
  );
};

export default About;