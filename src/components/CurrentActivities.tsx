// components/CurrentActivities.tsx
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface CurrentActivitiesProps {
  activityImage: string;
}

const CurrentActivities: React.FC<CurrentActivitiesProps> = ({ activityImage }) => {
  const titleRef = useScrollAnimation();
  const contentRef = useScrollAnimation();

  return (
    <div className="pt-6 md:pt-10 px-4 md:px-7">
      <div 
        ref={titleRef} 
        className="text-3xl md:text-5xl text-pink-500 font-bold text-center mb-8 md:mb-16 opacity-0"
      >
        CURRENT ACTIVITIES
      </div>

      <div 
        ref={contentRef} 
        className="flex flex-col md:flex-row justify-between items-center max-w-[1400px] mx-auto gap-6 md:gap-0 opacity-0"
      >
        {/* Content Section */}
        <div className="w-full md:w-1/2 md:pr-8 flex flex-col">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8">
              Building The Community
            </h2>
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-12">
              <p className="text-xl md:text-2xl">December 2024</p>
              <p className="text-lg md:text-xl">Edmonton, AB</p>
              <p className="text-lg md:text-xl mt-4 md:mt-8 max-w-md px-4 md:px-0">
                Join us and together we build the necessary infrastructure for the local community
              </p>
            </div>
            <button className="bg-pink-500 text-white py-3 md:py-4 px-6 md:px-8 rounded-md text-lg md:text-xl w-full max-w-[280px] md:max-w-md hover:bg-pink-600 active:bg-pink-700">
              REGISTER
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <img
            src={activityImage}
            alt="Community activity"
            className="w-full h-[300px] md:h-[500px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CurrentActivities;