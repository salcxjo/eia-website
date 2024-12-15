// components/Newsletter.tsx
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Newsletter: React.FC = () => {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  return (
    <div className="flex justify-between px-20 py-20 bg-white">
      <div ref={leftRef} className="flex flex-col justify-center space-y-6 w-1/2 opacity-0">
        <h2 className="text-5xl font-bold">
          <span className="text-green-700">STAY </span>
          <span className="text-green-700">IN </span>
          <span className="text-green-700">THE </span>
          <span className="text-orange-500">L</span>
          <span className="text-blue-500">O</span>
          <span className="text-pink-500">O</span>
          <span className="text-pink-500">P</span>
        </h2>
        <p className="text-2xl">
          Subscribe to our newsletter to never miss a thing from us!
        </p>
      </div>
      <div ref={rightRef} className="w-1/2 opacity-0">
        <div className="bg-purple-400 w-full h-[500px] rounded-3xl"></div>
      </div>
    </div>
  );
};
  
  export default Newsletter;