import { Link } from "react-router-dom"

function Home () {
  return (
    <section className="">
      <div className="">
        <h1>Bra Fitting Advisor</h1>
        <p>Experiencia de Asesoramiento Especializado en Corsetería</p>
        <Link to={"/advisor"}>
          <button>Inicia tu Asesoramiento</button>
        </Link>
      </div>
    </section>
  )
}

export default Home