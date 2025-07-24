import API from "../../api/axiosConfig";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function RegisterForm () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleRegister = async e => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/register', { email, password });
      login(res.data.token);
    } catch {
      alert('Ya existe ese usuario');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Crea tu espacio personal</h2>
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
      <button type="submit">Registrarme</button> 
    </form>
  );
}