 /* eslint-disable */
import React, { useState } from 'react'
import CardSection from './CardSection'
import {projects} from "../Data"
import "./portfolio.scss"
import { useLanguage } from '../Context/LanguageContext.jsx';
import { IoIosArrowUp } from "react-icons/io";

const PersoProjects = () => {
  const { language } = useLanguage();
  const [isopen, setIsOpen] = useState(false)

  return (
    <>
      <a className='anchor' id='projets-personnels'></a>
      <section className="container_portfolio" id='projets-personnels'>
      <div onClick={() => setIsOpen(!isopen)} className="container_arrow_title">
          <h1 className="main-title-portfolio">{language === 'FR' ? 'Projets Personnels' : 'Personnal Projects'}</h1>
          <IoIosArrowUp />
        </div>
          {
            isopen &&
          <article className="container-projects">
            <CardSection datas={projects} />
          </article>
    }
      </section>
    </>
  )
}

export default PersoProjects
