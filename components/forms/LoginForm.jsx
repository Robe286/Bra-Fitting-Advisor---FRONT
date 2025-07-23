import API from "../../api/axiosConfig";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function LoginForm () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async e => {
    e.preventdefault();
    try {
      const res = await API.post('auth/login', { email, password });
      login(res.data.token);
      navigate('/dashboard'); // Redirige al espacio personal
    } catch {
      alert('Credenciales incorrectas')
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Inicia Sesión</h2>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
}