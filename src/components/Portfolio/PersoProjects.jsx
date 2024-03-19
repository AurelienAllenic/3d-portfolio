 /* eslint-disable */
import React from 'react'
import CardSection from './CardSection'
import {projects} from "../Data"
import "./portfolio.scss"
import { useLanguage } from '../Context/LanguageContext.jsx';
const PersoProjects = () => {
  const { language } = useLanguage();
  return (
    <>
      <a className='anchor' id='projets-personnels'></a>
      <section className="container_portfolio dev" id='projets-personnels'>
        <h1 className="main-title-portfolio">{ language === 'FR' ? 'Projets Personnels' : 'Personnal Projects'}</h1>
          <article className="container-projects">
            <CardSection datas={projects} />
          </article>
      </section>
    </>
  )
}

export default PersoProjects
