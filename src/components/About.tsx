// components/About.tsx
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
    <div>
      {/* First Gallery Section */}
      <div ref={ref1} className="flex justify-between items-center w-full overflow-hidden px-7 pt-16 opacity-0 gap-1 sm:gap-2 md:gap-4 lg:gap-8">

        <div className="w-1/3 p-4">
          <img 
            src={galleryImage1} 
            className="w-full h-[400px] object-cover rounded-3xl" 
            alt="Gallery 1" 
          />
        </div>
        <div className="w-2/5 p-4">
          <img 
            src={galleryImage2} 
            className="w-full h-[400px] object-cover rounded-3xl" 
            alt="Gallery 2" 
          />
        </div>
      </div>

      {/* First About Section */}
      <div ref={ref2} className="flex flex-row p-10 justify-between items-center opacity-0">
        <div className="flex flex-col w-1/3">
          <h1 className="text-6xl">ABOUT</h1>
          <h1 className="text-4xl text-blue-700 pt-6">Engineer In Action</h1>
        </div>
        <p className="text-3xl w-1/2 font-medium">
          We work with under-served communities and global partners to execute sustainable engineering projects that build local capacity and improve access to essential resources.
        </p>
      </div>

      {/* Second Gallery Section */}
      <div ref={ref3} className="flex justify-between items-end w-full overflow-hidden px-7 pt-10 opacity-0 gap-1 sm:gap-2 md:gap-4 lg:gap-8">
        <div className="w-5/12 p-4">
          <img 
            src={galleryImage3} 
            className="w-full h-[400px] object-cover rounded-3xl" 
            alt="Gallery 3" 
          />
        </div>
        <div className="w-1/3 p-4">
          <img 
            src={galleryImage4} 
            className="w-full h-[400px] object-cover rounded-3xl" 
            alt="Gallery 4" 
          />
        </div>
      </div>

      {/* Second About Section */}
      <div ref={ref4} className="flex flex-row p-10 justify-between items-center opacity-0">
        <p className="text-3xl w-1/2 font-medium">
          We adhere to our parent organization and devote ourselves for the greater good of local communities and the world
        </p>
        <div className="items-end flex flex-col w-1/3">
          <h1 className="text-6xl">ABOUT</h1>
          <h1 className="text-4xl text-green-700 pt-6">University Of Alberta Chapter</h1>
        </div>
      </div>
    </div>
  );
};

export default About;