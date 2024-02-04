import React from 'react'
import Navbar from './nav/Nav'
import Home from './Home/Home'
import Languages from './Languages/Languages'
import ReactFormation from './Portfolio/ReactFormation'
import DevFormation from './Portfolio/DevFormation'
import PersoProjects from './Portfolio/PersoProjects'
import Interests from './Interests/Interests'
import Contact from './Contact/Contact'

const EntireApp = () => {
  return (
    <>
      <Home />
      
      <Languages />
      <ReactFormation />
      <DevFormation />
      <PersoProjects />
      <Interests />
      <Contact />
    </>
  )
}

export default EntireApp
