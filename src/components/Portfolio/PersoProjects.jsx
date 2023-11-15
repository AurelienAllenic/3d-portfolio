import React from 'react'
import CardSection from './CardSection'
import {projects} from "../Data"
import "./portfolio.css"
const PersoProjects = () => {
  return (
    <>
    <a className='anchor' id='projets-personnels'></a>
    <section className="container_portfolio dev" id='projets-personnels'>
    <h1 className="main-title-portfolio">Some Personnal Projects</h1>
      <article className="container-projects">
        <CardSection datas={projects} />
      </article>
  </section>
  </>
  )
}

export default PersoProjects
