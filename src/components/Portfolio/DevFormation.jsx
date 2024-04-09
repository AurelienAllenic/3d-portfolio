import { openclassrooms1 } from "../Data"
import CardSection from './CardSection'
import "./portfolio.scss"
import { useLanguage } from '../Context/LanguageContext.jsx';

const DevFormation = () => {
  const { language } = useLanguage();
  return (
    <>
      <a className='anchor' id='formation-web'></a>
        <section className="container_portfolio dev" id="formation-web">
          <h1 className="main-title-portfolio">{language === 'FR' ? "Formation Développeur Web" : 'General Dev formation'}</h1>
            <article className="container-projects">
              <CardSection datas={openclassrooms1} />
            </article>
        </section>
    </>
  )
}

export default DevFormation
