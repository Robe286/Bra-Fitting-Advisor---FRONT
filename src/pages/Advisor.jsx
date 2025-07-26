import BraSizeForm from '../components/forms/BraSizeForm.jsx';
import FilterProductsForm from '../components/forms/FilterProductsForm.jsx';
import VideoPerfectBra from '../components/visuals/videoPerfectBra.jsx';

function Advisor () {
  const imageURL = 'https://shre.ink/xnx4'
  return (
    <section className='advisor-container'>
      <div className='advisor-image-background'>
        <img src={imageURL} alt='Chica posando en sujetador' />
        <h1>Encuentra el sujetador que define tu figura</h1>
      </div>
      <div className='first-group-container'>
        <div className='title-paragraf-one'>
          <h4>¿Cual es mi talla real de sujetador? ¿Qué tipo de sujetador se adapta a mi?</h4>
        </div>
        <div className='video-bra-size-container'>
          <VideoPerfectBra/>
          <p>
            <strong>Tu talla perfecta no es un número, es una revelación. Vamos a descubrirla</strong>
            <br></br>
            <br></br>
            Quizás alguna vez te has hecho alguna de estas preguntas.
            Muchas mujeres desconocen cual es su talla exacta y usan una
            talla de sujetador que no se adapta a ellas. Al igual que la
            talla, saber que tipo de sujetador te conviene según la forma
            de tu pecho, es crucial para tu bienestar y comodidad
            <br></br>
            <br></br>
            Pero no te preocupes, estamos encantadas de ayudarte. Este video
            te muestra los pasos y detalles que debes tener en cuenta para tomarte
            las medidas correctamente
          </p>
        </div>
      </div>
      <div>
        <BraSizeForm />
        <FilterProductsForm />
      </div>
    </section>
  )
}

export default Advisor;