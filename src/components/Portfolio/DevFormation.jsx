import { openclassrooms1 } from "../Data"
import CardSection from './CardSection'
import "./portfolio.scss"
import { useLanguage } from '../Context/LanguageContext.jsx';
import { IoIosArrowUp } from "react-icons/io";
import { useState } from 'react';

const DevFormation = () => {
  const { language } = useLanguage();
  const [isopen, setIsOpen] = useState(false)
  return (
    <>
      <a className='anchor' id='formation-web'></a>
        <section className="container_portfolio" id="formation-web">
        <div onClick={() => setIsOpen(!isopen)} className="container_arrow_title">
          <h1 className="main-title-portfolio">{language === 'FR' ? 'Formation Dev Web' : 'Web Dev formation'}</h1>
          <IoIosArrowUp />
        </div>
          {
            isopen &&
            <article className="container-projects">
              <CardSection datas={openclassrooms1} />
            </article>
          }
        </section>
    </>
  )
}

export default DevFormation
