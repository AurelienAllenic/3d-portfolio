import { openclassrooms2 } from "../Data"
import CardSection from './CardSection'
import "./portfolio.scss"
import { useLanguage } from '../Context/LanguageContext.jsx';

const ReactFormation = () => {
  const { language } = useLanguage();
  return (
    <>
      <a className='anchor' id='formation-react'></a>
      <section className="container_portfolio margin" id="formation-react">
        <h1 className="react main-title-portfolio">{language === 'FR' ? 'Projets - formation React' : 'Projects - React formation'}</h1>
          <article className="container-projects" >
            <CardSection datas={openclassrooms2} />
          </article>
      </section>
    </>
  )
}

export default ReactFormation
