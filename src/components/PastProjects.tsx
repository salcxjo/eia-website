// components/PastProjects.tsx
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ProjectImage {
  image: string;
  title: string;
  description: string;
  date: string;
}

interface PastProjectsProps {
  projectImages: ProjectImage[];
}

const PastProjects: React.FC<PastProjectsProps> = ({ projectImages }) => {
  const titleRef = useScrollAnimation();
  const projectsRef = useScrollAnimation();

  return (
    <div className="bg-orange-500 text-white">
      <div className="pt-6 md:pt-12"></div>
      <h1 
        ref={titleRef} 
        className="text-4xl md:text-6xl text-center pt-6 md:pt-10 pb-6 md:pb-10 opacity-0"
      >
        PAST PROJECTS
      </h1>
      
      <div className="bg-orange-500 p-4 md:p-8">
        <div 
          ref={projectsRef} 
          className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 max-w-[1400px] mx-auto opacity-0"
        >
          {projectImages.map((project, index) => (
            <div 
              key={index} 
              className="w-full md:w-1/3 flex flex-col items-center text-center text-white pb-8 md:pb-0"
            >
              <img
                src={project.image}
                alt={`Project ${index + 1}`}
                className="w-full h-[300px] md:h-[500px] object-cover rounded-lg mb-4 md:mb-6"
              />
              <h2 className="text-2xl md:text-4xl mb-2 md:mb-4">{project.title}</h2>
              <p className="text-lg md:text-xl mb-2 md:mb-3">{project.description}</p>
              <p className="text-base md:text-lg">{project.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastProjects;