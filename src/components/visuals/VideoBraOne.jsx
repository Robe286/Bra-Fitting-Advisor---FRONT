function VideoBraOne() {
  const URLUno = 'https://shre.ink/xUV5';
  const URLDos = 'https://shre.ink/xUG3';

  return (
    <div className="video-container-perfectbra">
      <video width="420" height="340" autoPlay loop controls muted>
        <source
          src={URLUno}
          type="video/mp4"/>
        Tu navegador no soporta la etiqueta de video.    
      </video>
      <video width="420" height="340" autoPlay loop controls muted>
        <source
          src={URLDos}
          type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.    
      </video>
    </div>
  );
}

export default VideoBraOne;