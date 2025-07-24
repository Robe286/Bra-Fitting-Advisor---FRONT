import API from "../../api/axiosConfig";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function LoginForm () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', { email, password });
      login(res.data.token);

    } catch {
      alert('Credenciales incorrectas')
    }
  };

  return (
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