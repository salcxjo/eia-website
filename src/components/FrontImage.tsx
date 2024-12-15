// components/FrontImage.jsx
interface FrontImageProps {
  backgroundImage: string;
}

const FrontImage: React.FC<FrontImageProps> = ({ backgroundImage }) => {
  return (
    <div className="relative h-[300px] md:h-[60vh] md:min-h-[600px] md:max-h-[800px]">
      <img 
        src={backgroundImage} 
        alt="background" 
        className="w-full h-full object-cover z-[1]"
      />
      <div className="absolute inset-0 bg-black/30 z-[2]"></div>
      <h1 
        className="absolute inset-0 flex items-end md:items-end justify-center
          text-2xl sm:text-3xl md:text-5xl lg:text-7xl
          text-white tracking-wider z-[2]
          px-4 md:px-8
          pb-8 md:pb-20 text-center
          transform -translate-y-0"
      >
        We are here to build a better future
      </h1>
    </div>
  );
};

export default FrontImage;