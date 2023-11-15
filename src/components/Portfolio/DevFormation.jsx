import { openclassrooms1 } from "../Data"
import CardSection from './CardSection'
import "./portfolio.css"

const DevFormation = () => {
  return (
    <>
    <a className='anchor' id='formation-web'></a>
      <section className="container_portfolio dev" id="formation-web">
      <h1 className="main-title-portfolio">Projects of the General Dev formation made with Openclassrooms</h1>
        <article className="container-projects">
          <CardSection datas={openclassrooms1} />
        </article>
    </section>
    </>
  )
}

export default DevFormation
