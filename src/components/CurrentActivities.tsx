// components/CurrentActivities.tsx
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface CurrentActivitiesProps {
    activityImage: string;
   }
   
   const CurrentActivities: React.FC<CurrentActivitiesProps> = ({ activityImage }) => {
    const titleRef = useScrollAnimation();
    const contentRef = useScrollAnimation();
    return (
      <div className="pt-10 px-7">
        <div ref={titleRef} className="text-5xl text-pink-500 font-bold text-center mb-16 opacity-0">
          CURRENT ACTIVITIES
        </div>
   
        <div ref={contentRef} className="flex justify-between items-center max-w-[1400px] mx-auto opacity-0">
          <div className="w-1/2 pr-8 flex flex-col">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-5xl font-bold mb-8">Building The Community</h2>
              <div className="space-y-4 mb-12">
                <p className="text-2xl">December 2024</p>
                <p className="text-xl">Edmonton, AB</p>
                <p className="text-xl mt-8 max-w-md">
                  Join us and together we build the necessary infrastructure for the local community
                </p>
              </div>
              <button className="bg-pink-500 text-white py-4 px-8 rounded-md text-xl max-w-md">
                REGISTER
              </button>
            </div>
          </div>
   
          <div className="w-1/2">
            <img 
              src={activityImage} 
              alt="Community activity" 
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    );
   };
   
   export default CurrentActivities;