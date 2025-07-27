import LoginForm from "../components/forms/LoginForm.jsx";
import RegisterForm from "../components/forms/RegisterForm.jsx";

function RegisterAndLogin () {
  return (
    <section className="register-login">
      <h1 style={{ color: "white" }}>Regístrate o inicia sesión</h1>
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