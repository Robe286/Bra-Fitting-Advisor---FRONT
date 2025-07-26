import { useNavigate } from 'react-router-dom';

export default function Error() {
  const navigate = useNavigate();

  return (
    <div className="notfound-wrapper">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">Ups... Esta lencería se ha perdido entre encajes.</p>
        <button className="notfound-button" onClick={() => navigate('/')}>
          Volver a la carga
        </button>
      </div>
      <div className="notfound-decoration"></div>
    </div>
  );
}