import { Link } from "react-router-dom"

function Home () {

  return (
    <section className="section-container">
      <div className="home-container">
        <h1>Experiencia de Asesoramiento en Corsetería</h1>
        <Link to={"/advisor"}>
          <button>Inicia tu Asesoramiento</button>
        </Link>
      </div>
    </section>
  )
}

export default Home