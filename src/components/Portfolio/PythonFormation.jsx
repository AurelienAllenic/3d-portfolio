import React, { useState } from 'react'
import { openclassrooms3 } from "../Data"
import CardSection from './CardSection'
import "./portfolio.scss"
import { useLanguage } from '../Context/LanguageContext.jsx';
import { IoIosArrowUp } from "react-icons/io";

const PythonFormation = () => {
  const { language } = useLanguage();
  const [isopen, setIsOpen] = useState(false)
  return (
    <>
      <a className='anchor' id='formation-python'></a>
      <section className="container_portfolio margin" id="formation-python">
        <h1 className='react first-title'>{language === 'FR' ? 'Projets' : 'Projects'}</h1>
        <div onClick={() => setIsOpen(!isopen)} className="container_arrow_title">
          <h1 className="main-title-portfolio">{language === 'FR' ? 'Formation Python' : 'Python formation'}</h1>
          <IoIosArrowUp />
        </div>
          {
            isopen &&
            <article className="container-projects" >
              <CardSection datas={openclassrooms3} />
            </article>
          }
      </section>
    </>
  )
}

export default PythonFormation
