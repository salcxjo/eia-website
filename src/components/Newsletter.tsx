// components/Newsletter.tsx
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Newsletter: React.FC = () => {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  return (
    <div className="flex flex-col md:flex-row justify-between px-4 md:px-20 py-10 md:py-20 bg-white gap-8 md:gap-0">
      <div 
        ref={leftRef} 
        className="flex flex-col justify-center space-y-4 md:space-y-6 w-full md:w-1/2 text-center md:text-left opacity-0"
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          <span className="text-green-700">STAY </span>
          <span className="text-green-700">IN </span>
          <span className="text-green-700">THE </span>
          <span className="text-orange-500">L</span>
          <span className="text-blue-500">O</span>
          <span className="text-pink-500">O</span>
          <span className="text-pink-500">P</span>
        </h2>
        <p className="text-xl md:text-2xl">
          Subscribe to our newsletter to never miss a thing from us!
        </p>
      </div>
      <div 
        ref={rightRef} 
        className="w-full md:w-1/2 opacity-0"
      >
        <div className="bg-purple-400 w-full h-[300px] md:h-[500px] rounded-2xl md:rounded-3xl"></div>
      </div>
    </div>
  );
};

export default Newsletter;