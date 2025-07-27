function VideoBraSize() {
  const URL = 'https://shre.ink/xU8b' 
  return (
    <div className="video-container-perfectBra">
      <video width="420" height="340" autoPlay loop controls muted>
        <source
        src={URL}
        type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.    
      </video>
    </div>
  );
}

export default VideoBraSize;