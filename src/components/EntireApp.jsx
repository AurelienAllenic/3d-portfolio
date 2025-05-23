import Languages from './Languages/Languages'
import ReactFormation from './Portfolio/ReactFormation'
import DevFormation from './Portfolio/DevFormation'
import PersoProjects from './Portfolio/PersoProjects'
import Contact from './Contact/Contact'
import About from './About/About'
import CvLetter from './CvLetter/CvLetter'
import PythonFormation from './Portfolio/PythonFormation'
import PopupNext from './PopupNext/PopupNext'

const EntireApp = () => {
  return (
    <>
      <div className='container_all_app'>
        <About />
        <PopupNext />
        <CvLetter />
        <Languages />
        <PythonFormation />
        <ReactFormation />
        <DevFormation />
        <PersoProjects />
        <Contact />
      </div>
    </>
  )
}

export default EntireApp
