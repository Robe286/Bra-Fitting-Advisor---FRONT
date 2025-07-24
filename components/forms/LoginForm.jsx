import API from "../../api/axiosConfig";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, useLocation } from 'react-router-dom';

import Spinner from "../Spinner";

export default function LoginForm () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/advisor"; // fallback

  const handleLogin = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post('/auth/login', { email, password });
      await new Promise(resolve => setTimeout(resolve, 1500)) // Tiempo de espera
      login(res.data.token);
      navigate(from, { replace: true }); // Redirige a la ruta original

    } catch {
      alert('Credenciales incorrectas');
      setLoading(false);
    }
  };

  return loading ? (
    <Spinner message="Iniciando sesión..." />
  ) : (
    <form onSubmit={handleLogin}>
      <h2>Inicia Sesión</h2>
      <input
        type="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        required
        autoComplete="off"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        required
        autoComplete="off"
      />
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
}