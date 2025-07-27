import BraSizeForm from '../components/forms/BraSizeForm.jsx';
import FilterProductsForm from '../components/forms/FilterProductsForm.jsx';
import VideoPerfectBra from '../components/visuals/videoPerfectBra.jsx';
import VideoParagraph from '../utils/videoParagraph.jsx';

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
          <h4>
            ¿Cual es mi talla real de sujetador?
            ¿Qué tipo de sujetador se adapta a mi?
          </h4>
        </div>
        <div className='video-bra-size-container'>
          <VideoPerfectBra />
          <VideoParagraph />
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