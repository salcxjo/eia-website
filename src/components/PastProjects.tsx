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
        <div className="pt-12"></div>
        <h1 ref={titleRef} className="text-6xl flex justify-center pt-10 pb-10 opacity-0">PAST PROJECTS</h1>
        <div className="bg-orange-500 p-8">
            <div ref={projectsRef} className="flex justify-between gap-12 max-w-[1400px] mx-auto opacity-0">
            {projectImages.map((project, index) => (
              <div key={index} className="w-1/3 flex flex-col items-center text-center text-white">
                <img 
                  src={project.image} 
                  alt={`Project ${index + 1}`} 
                  className="w-full h-[600px] object-cover rounded-lg mb-6"
                />
                <h2 className="text-4xl mb-4">{project.title}</h2>
                <p className="text-xl mb-3">{project.description}</p>
                <p className="text-lg">{project.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default PastProjects;