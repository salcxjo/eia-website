// components/Newsletter.tsx
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useEffect } from 'react';

const Newsletter: React.FC = () => {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widgets.sociablekit.com/linkedin-page-posts/widget.js';
    script.defer = true;
    document.body.appendChild(script);
  }, []);

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
          Follow us on Linkedin to never miss a thing from us!
        </p>
      </div>
      <div 
        ref={rightRef} 
        className="w-full md:w-1/2 opacity-0"
      >
        <div className='sk-ww-linkedin-page-post' data-embed-id='25509517'></div>
      </div>
    </div>
  );
};

export default Newsletter;
