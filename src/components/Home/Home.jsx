import './home.css'
import CV from "../../assets/CV.pdf"
import Motivation from "../../assets/motivation.pdf"
import Links from "./Links.jsx";
import ChangeLanguage from './ChangeLanguage.jsx';
import { useLanguage } from '../Context/LanguageContext.jsx';

const Home = () => {
  const { language } = useLanguage();
  return (
    <>
    <a className='anchor' id='home'></a>
<section  className="section-home">
  <ChangeLanguage/>
<div className="container">
    <article className="container_infos">
    <h1 className="main-title">Aurélien Allenic</h1>
      <h2 className="second-title">{language === 'FR' ? 'Développeur Web' : 'Web Developer'}</h2>
    </article>
    <div className="container-cv-letter">
            <button className="btn">
                <a href={CV} target='_blank' rel="noreferrer" className="linkHome cv">{language === 'FR' ? 'Télécharger CV' : 'Download CV'}</a>
            </button>
            <button className="btn">
            <a href={Motivation} target='_blank' className="linkHome letter" rel="noreferrer">{language === 'FR' ? 'Lettre de Motivation' : 'Motivation Letter'}</a>
        </button>
      </div>
    <Links/>
    </div>
</section>
</>
  )
}

export default Home




