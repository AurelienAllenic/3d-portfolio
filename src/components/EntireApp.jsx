import Languages from './Languages/Languages'
import ReactFormation from './Portfolio/ReactFormation'
import DevFormation from './Portfolio/DevFormation'
import PersoProjects from './Portfolio/PersoProjects'
import Contact from './Contact/Contact'
import About from './About/About'
import CvLetter from './CvLetter/CvLetter'

const EntireApp = () => {
  return (
    <>
      <div className='container_all_app'>
        <About />
        <CvLetter />
        <Languages />
        <ReactFormation />
        <DevFormation />
        <PersoProjects />
        <Contact />
      </div>
    </>
  )
}

export default EntireApp
