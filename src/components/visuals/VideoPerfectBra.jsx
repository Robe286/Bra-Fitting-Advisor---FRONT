function VideoBraSize() {
  const URL1 = 'https://shre.ink/xU8b'
  const URL2 = 'https://shre.ink/xUG3' 
  return (
    <div className="video-container-perfectBra">
      <video width="420" height="340" autoPlay loop controls muted>
        <source
        src={URL1}
        type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.    
      </video>
      <video width="420" height="340" autoPlay loop controls muted>
        <source
        src={URL2}
        type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.    
      </video>
    </div>
  );
}

export default VideoBraSize;