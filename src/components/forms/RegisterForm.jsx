import API from "../../api/axiosConfig";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

import Spinner from "../Spinner";

export default function RegisterForm () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/advisor"; // Ruta por defecto tras registro

  const handleRegister = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post('/auth/register', { email, password });
      await new Promise(resolve => setTimeout(resolve, 1500));
      login(res.data.token);
      navigate(from, { replace: true }); // redirige a la ruta por defecto

    } catch {
      alert('Ya existe ese usuario');
      setLoading(false);
    }
  };

  return loading ? (
    <Spinner message="Creando tu usuario..."/>
  ) : (
    <form onSubmit={handleRegister}>
      <h2>Crea tu espacio personal</h2>
      <input
        type="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        autoComplete="off"
        required
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        autoComplete="off"
        required
      />
      <button type="submit">Registrarme</button> 
    </form>
  );
}