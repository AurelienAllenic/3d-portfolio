import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/nav/Nav';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BarLoader from 'react-spinners/BarLoader';
import { useState, useEffect } from 'react';
import Languages from './components/Languages/Languages';
import ReactFormation from './components/Portfolio/ReactFormation';
import DevFormation from './components/Portfolio/DevFormation';
import PersoProjects from './components/Portfolio/PersoProjects';
import Interests from './components/Interests/Interests';
import Contact from './components/Contact/Contact';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    AOS.init();
  }, []);

  return (
    <Router>
      <div className="App">
        {loading ? (
          <div className="loader">
            <BarLoader
              loading={loading}
              size={800}
              width={200}
              color="#008ab3"
              aria-label="Loading Spinner"
              data-testid="loader"
              speedMultiplier={1}
            />
          </div>
        ) : (
          <>
            <div className="animation-apparition">
              <Navbar />
              <Routes>
                <Route exact path="/" element={<Home />} />

                <Route exact path="/languages" element={<Languages />} />

                <Route exact path="/react-formation" element={<ReactFormation />} />

                <Route exact path="/dev-formation" element={<DevFormation />} />

                <Route exact path="/personnal-projects" element={<PersoProjects />} />

                <Route exact path="/interests" element={<Interests />} />

                <Route exact path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
