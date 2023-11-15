import './home.css'
import CV from "../../assets/CV.pdf"
import Motivation from "../../assets/motivation.pdf"
import Links from "./Links.jsx";

const Home = () => {
  return (
    <>
    <a className='anchor' id='home'></a>
<section  className="section-home">

<div className="container">
    <article className="container_infos">
      <h1 className="main-title">Aurélien Allenic</h1>
      <h2 className="second-title">Web Developer</h2>
      
    </article>
    <div className="container-cv-letter">
            <button className="btn">
                <a href={CV} target='_blank' rel="noreferrer" className="linkHome cv">Download CV</a>
            </button>
            <button className="btn">
            <a href={Motivation} target='_blank' className="linkHome letter" rel="noreferrer">Motivation Letter</a>
        </button>
      </div>
    <Links/>
    </div>
</section>
</>
  )
}

export default Home




