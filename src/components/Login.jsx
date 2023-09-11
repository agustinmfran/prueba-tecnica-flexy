import Form from "./Form";
import "./Login.css";

function Login() {
  return (
    <section className="login-section">
      <div className="bienvenido-container">
        <h1>¡Bienvenido!</h1>
        <p>Conviertete ahora en un agente Flexy.</p>
      </div>
      <div className="form-container">
        <Form />
      </div>
      <div className="register-container">
        <p>
          ¿Ya ténes una cuenta? <a href="#">Iniciá sesión</a>
        </p>
      </div>
    </section>
  );
}

export default Login;
