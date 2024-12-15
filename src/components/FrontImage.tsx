// components/FrontImage.jsx
interface FrontImageProps {
    backgroundImage: string;
  }
const FrontImage: React.FC<FrontImageProps> = ({ backgroundImage }) => {
    return (
      <div className="relative">
        <img src={backgroundImage} alt="background" className="w-full h-auto z-[1]" />
        <div className="absolute inset-0 bg-black/30 z-[2]"></div>
        <h1 className="absolute inset-0 flex items-center justify-center 
            translate-y-[6rem] sm:translate-y-[8rem] md:translate-y-[10.5rem]
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
            text-white tracking-wider z-[2]
            pb-5 text-center">
          We are here to build a better future
        </h1>
      </div>
    );
  };
  
  export default FrontImage;