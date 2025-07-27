import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Nav () {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  return (
    <nav className="nav-container">
      <Link
        to={"/"}
        className="home-link"
        style={{ textDecoration: 'none', color: '#040404ff'}}>
        <strong>Bra Fitting Advisor</strong>
      </Link>
      <div className="link-brabracoa">
        <a
          href="https://www.brabracoa.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Brabracoa"
        > Visita nuestra tienda online</a>
      </div>
      {isAuthenticated ? (
        <button onClick={handleLogout} className="login-logout-link">Cerrar sesión</button>
      ) : (
        <Link to={"/register"}>
          <button className="login-logout-link">Inicia sesión</button>
        </Link>
      )}
    </nav>
  );
}

export default Nav;