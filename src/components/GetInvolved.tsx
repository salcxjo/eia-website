// components/GetInvolved.tsx
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const GetInvolved: React.FC = () => {
  const ref = useScrollAnimation();

  return (
    <div ref={ref} className="flex flex-col items-center justify-center py-20 space-y-8 opacity-0">
      <h1 className="text-6xl text-red-500 font-semibold">GET INVOLVED</h1>
      <p className="text-3xl text-center max-w-3xl">
        Join us as we make the future brighter for the under-served community
      </p>
      <button className="bg-red-500 text-white text-2xl py-4 px-20 rounded-md mt-12 hover:bg-red-600 active:bg-red-700">
        JOIN OUR CLUB
      </button>
    </div>
  );
};
  
  export default GetInvolved;