import React from 'react'
import CardSectionPerso from './CardSectionPerso'
import {projects} from "../Data"
import "./portfolio.css"
const PersoProjects = () => {
  return (
    <section className="container_portfolio dev">
    <h1 className="main-title-portfolio">Some Personnal Projects</h1>
      <article className="container-projects">
        <CardSectionPerso datas={projects} />
      </article>
  </section>
  )
}

export default PersoProjects
