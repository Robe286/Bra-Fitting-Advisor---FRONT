import { Link } from "react-router-dom"

function Home () {
  const imageURLuno = 'https://shre.ink/xUrY';
  const imageURLdos = 'https://shre.ink/xUrA';
  return (
    <section className="section-container">
      <div className="home-container">
        <h4 style={{ color: '#6b21a8'}}>Experiencia de Asesoramiento Especializado en Corsetería</h4>
        <Link to={"/advisor"}>
          <button>Inicia tu Asesoramiento</button>
        </Link>
        <div className="hero-images">
          <img src={imageURLuno} alt='Chica posando en sujetador' />
          <img src={imageURLdos} alt='Chica posando en sujetador' />
        </div>
      </div>
    </section>
  )
}

export default Home