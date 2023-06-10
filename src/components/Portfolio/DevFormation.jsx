import { openclassrooms1 } from "../Data"
import CardSection from './CardSection'
import "./portfolio.css"

const DevFormation = () => {
  return (
      <section className="container_portfolio-dev">
      <h1 className="main-title-portfolio-dev">Projects of the General Dev formation made with Openclassrooms</h1>
        <article className="container-projects-dev">
          <CardSection datas={openclassrooms1} />
        </article>
    </section>
  )
}

export default DevFormation
