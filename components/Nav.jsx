import { Link } from "react-router-dom";

function Nav () {

  return (
    <nav>
      <Link to={"/"}>Site Name</Link>
      <Link to={"/register"}>
        <button>REGÍSTRATE</button>
      </Link>
      <Link>
        <button>INICIA SESIÓN</button>
      </Link>
    </nav>
  )
}

export default Nav