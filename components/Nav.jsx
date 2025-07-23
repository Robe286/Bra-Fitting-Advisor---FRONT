import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Nav () {
  //const [view, setview] = useState('login');
  //const { isAuthenticated } = useContext(AuthContext);

  //if (isAuthenticated) return <Navigate to="/dashboard" />;

  return (
    <nav>
      <Link to={"/"}>Site Name</Link>
      <Link to={"/dasboard"}>Lista de Deseos</Link>
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