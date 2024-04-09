import { openclassrooms3 } from "../Data"
import CardSection from './CardSection'
import "./portfolio.scss"
import { useLanguage } from '../Context/LanguageContext.jsx';

const PythonFormation = () => {
  const { language } = useLanguage();
  return (
    <>
    <p className='main-title-portfolio_projects margin'>{language === 'FR' ? 'Projets' : 'Projects'}</p>
      <a className='anchor' id='formation-python'></a>
      <section className="container_portfolio" id="formation-react">
        <h1 className="react main-title-portfolio">{language === 'FR' ? 'Formation Python' : 'Python formation'}</h1>
          <article className="container-projects" >
            <CardSection datas={openclassrooms3} />
          </article>
      </section>
    </>
  )
}

export default PythonFormation
