import { openclassrooms2 } from "../Data"
import CardSection from './CardSection'
import "./portfolio.css"

const ReactFormation = () => {
  return (
    <section className="container_portfolio">
      <h1 className="main-title-portfolio">Projects Of the React formation made with Openclassrooms</h1>
        <article className="container-projects">
          <CardSection datas={openclassrooms2} />
        </article>
    </section>
  )
}

export default ReactFormation
