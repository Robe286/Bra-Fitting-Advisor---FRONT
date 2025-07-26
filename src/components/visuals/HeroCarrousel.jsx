import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import './HeroCarousel.css'; // tus estilos personalizados

function HeroCarousel() {
  const images = [
    'https://shre.ink/xnvP',
    'https://shre.ink/xnvJ',
    'https://shre.ink/xnvw',
    'https://shre.ink/xnvN',
    'https://shre.ink/xnvz',
    'https://shre.ink/xnvi',
  ];

  return (
    <section className="hero-carousel">
      <Swiper
        direction="vertical"
        effect="fade"
        modules={[EffectFade, Autoplay]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        className="hero-swiper"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt={`Slide ${i + 1}`} className="hero-slide-image" />
          </SwiperSlide>
        ))}
      </Swiper>
      <h1 className="hero-title">Encuentra el sujetador que define tu figura</h1>
    </section>
  );
}

export default HeroCarousel;