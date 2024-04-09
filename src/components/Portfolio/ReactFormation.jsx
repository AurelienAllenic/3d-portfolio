import { openclassrooms2 } from "../Data"
import CardSection from './CardSection'
import "./portfolio.scss"
import { useLanguage } from '../Context/LanguageContext.jsx';
import { IoIosArrowUp } from "react-icons/io";
import { useState } from 'react';

const ReactFormation = () => {
  const { language } = useLanguage();
  const [isopen, setIsOpen] = useState(false)
  return (
    <>
      <a className='anchor' id='formation-react'></a>
      <section className="container_portfolio" id="formation-react">
      <div onClick={() => setIsOpen(!isopen)} className="container_arrow_title">
          <h1 className="main-title-portfolio">{language === 'FR' ? 'Formation React' : 'React formation'}</h1>
          <IoIosArrowUp />
        </div>
          {
            isopen &&
          <article className="container-projects" >
            <CardSection datas={openclassrooms2} />
          </article>
          }
      </section>
    </>
  )
}

export default ReactFormation
