// App.tsx
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import FrontImage from './components/FrontImage';
import About from './components/About';
import PastProjects from './components/PastProjects';
import CurrentActivities from './components/CurrentActivities';
import GetInvolved from './components/GetInvolved';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import MomentumScroll from './components/MomentumScroll';

// Import images
import EiaLogo from './assets/images/logo.png';
import pic1 from './assets/images/Top50/pic1.jpg';
import pic2 from './assets/images/Top50/pic2.jpg';
import pic3 from './assets/images/Top50/pic3.jpg';
import pic4 from './assets/images/Top50/pic4.jpg';
import pic5 from './assets/images/Top50/pic5.jpg';

function App() {
  // Handle anchor link clicks
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          const yOffset = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: yOffset,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const pastProjects = [
    {
      image: pic1,
      title: "Project A",
      description: "Building a bridge for the community",
      date: "01/2024 - 04/2024"
    },
    {
      image: pic2,
      title: "Project B",
      description: "Raising awareness for recycling",
      date: "05/2023 - 08/2023"
    },
    {
      image: pic3,
      title: "Project C",
      description: "Helping with the local food bank",
      date: "12/2022 - 09/2022"
    }
  ];

  return (
    // Router wrapper
    <Router>
      {/* Momentum scroll */}
      <MomentumScroll>
        <main className="relative">
          {/* Nav bar section*/}
          <section className="min-h-[50vh]" id="top">
            <Navbar logoSrc={EiaLogo} />
            <FrontImage backgroundImage={pic1} />
          </section>

          {/* About section */}
          <section id="about" className="relative bg-white">
            <About
              galleryImage1={pic2}
              galleryImage2={pic3}
              galleryImage3={pic4}
              galleryImage4={pic5}
            />
          </section>
          {/* Spacing */}
          <div className="bg-white p-12"></div>

          {/* Past project section */}
          <section className="relative" id="projects">
            <div className="relative w-full">
              <div className="relative w-full h-32 overflow-hidden">
                <div className="absolute w-[150%] h-[150%] bg-orange-500 transform skew-y-[4deg] origin-top-left"></div>
              </div>
            </div>

            <div className="relative bg-orange-500">
              <PastProjects projectImages={pastProjects} />
              <div className="p-10"></div>
            </div>
            
            <div className="relative w-full bg-orange-500">
              <div className="relative w-full h-32 overflow-hidden bg-orange-500">
                <div className="absolute w-[150%] h-[150%] bg-white transform skew-y-[4deg] origin-bottom-left translate-y-[-2px]"></div>
              </div>
            </div>
          </section>

          {/* Current Activities section */}
          <section className="relative bg-white">
            <CurrentActivities activityImage={pic3} />
          </section>

          {/* get Involved and newsletter section */}
          <section id="get-involved" className="relative bg-white">
            <GetInvolved />
            <Newsletter />
          </section>

          {/* Spacing */}
          <div className="bg-white p-12"></div>

          {/* Footer section */}
          <section id="contact" className="relative">
            <Footer />
          </section>
        </main>
      </MomentumScroll>
    </Router>
  );
}

export default App;