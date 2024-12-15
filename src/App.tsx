import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import FrontImage from './components/FrontImage';
import About from './components/About';
import PastProjects from './components/PastProjects';
import CurrentActivities from './components/CurrentActivities';
import GetInvolved from './components/GetInvolved';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

// Import images
import EiaLogo from './assets/images/logo.png';
import pic1 from './assets/images/Top50/pic1.jpg';
import pic2 from './assets/images/Top50/pic2.jpg';
import pic3 from './assets/images/Top50/pic3.jpg';
import pic4 from './assets/images/Top50/pic4.jpg';
import pic5 from './assets/images/Top50/pic5.jpg';

function App() {
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
    <Router>
      <div className="min-h-screen" id="top">
        <Navbar logoSrc={EiaLogo} />
        <FrontImage backgroundImage={pic1} />
      </div>

      <div id="about">
        <About 
          galleryImage1={pic2}
          galleryImage2={pic3}
          galleryImage3={pic4}
          galleryImage4={pic5}
        />
      </div>

      {/* spacing */}
      <div className="bg-white p-12"></div>

      {/* Open triangle */}
      <div className="relative w-full" id="projects">
        <div className="relative w-full h-32 overflow-hidden">
          <div className="absolute w-[150%] h-full bg-orange-500 transform skew-y-[4deg] origin-top-left"></div>
        </div>
      </div>

      <div >
        <PastProjects projectImages={pastProjects} />
        {/* spacing */}
        <div className="p-10 bg-orange-500"></div>
        {/* Closing triangle */}
        <div className="relative w-full bg-orange-500">
          <div className="relative w-full h-32 overflow-hidden">
            <div className="absolute w-[150%] h-full bg-white transform skew-y-[4deg] origin-bottom-left"></div>
          </div>
        </div>
      </div>

      {/* spacing */}
      <div className="bg-white p-4" ></div>
      <CurrentActivities activityImage={pic3} />

      {/* spacing */}
      <div className="bg-white p-4" id="get-involved"></div>

      <div >
        <GetInvolved />
        <Newsletter />
      </div>

      {/* spacing */}
      <div className="bg-white p-12"></div>

      <div id="contact">
        <Footer />
      </div>
    </Router>
  );
}

export default App;