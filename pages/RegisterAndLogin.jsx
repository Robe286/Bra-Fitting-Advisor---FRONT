import LoginForm from "../components/forms/LoginForm.jsx";
import RegisterForm from "../components/forms/RegisterForm.jsx";

function RegisterAndLogin () {
  return (
    <section>
      <h2>Regístrate y crea un espacio propio para guardar tus recomendaciónes</h2>
      <div>
        <RegisterForm/>
      </div>
      <div>
        <LoginForm/>
      </div>
    </section>
  )
}

export default RegisterAndLogin;