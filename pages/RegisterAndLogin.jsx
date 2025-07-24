import LoginForm from "../components/forms/LoginForm.jsx";
import RegisterForm from "../components/forms/RegisterForm.jsx";

function RegisterAndLogin () {
  return (
    <section>
      <h2>Regístrate o inicia sesión y guarda tus recomendaciónes</h2>
      <div>
        <RegisterForm />
      </div>
      <div>
        <LoginForm />
      </div>
    </section>
  )
}

export default RegisterAndLogin;