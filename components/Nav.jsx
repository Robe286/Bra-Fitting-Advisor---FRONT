import { Link } from "react-router-dom";

function Nav () {
  return (
    <nav>
      <Link to={"/"}>Site Name</Link>
      <Link to={""}>Productos</Link>
      <Link to={""}>Lista de Deseos</Link>
      <Link >
        <button>REGÍSTRATE</button>
      </Link>
      <Link>
        <button>INICIA SESIÓN</button>
      </Link>
    </nav>
  )
}

export default Nav