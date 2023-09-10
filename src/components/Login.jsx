import { useState } from "react";
import "./Login.css";

function Login() {
  const [shown, setShown] = useState(false);
  const switchShown = function (e) {
    e.preventDefault();
    setShown(!shown);
  };
  const [password, setPassword] = useState("");
  const onChange = ({ currentTarget }) => setPassword(currentTarget.value);
  return (
    <main className="login-main">
      <div className="bienvenido-container">
        <h1>¡Bienvenido!</h1>
        <p>Conviertete ahora en un agente Flexy.</p>
      </div>
      <div className="form-container">
        <form>
          <div className="perfil-container">
            <img src="/images/icono.svg" alt="perfil" />
            <p>Subí tu foto de perfil</p>
          </div>
          <input type="text" placeholder="Nombre y Apellido" />
          <input type="tel" placeholder="+54 9 221 000 0000" />
          <input type="email" placeholder="hola@tuemail.com" />
          <div className="password-container">
            <input
              id="password"
              onChange={onChange}
              type={shown ? "text" : "password"}
              value={password}
              placeholder="Ingresá tu contraseña"
            />
            <div className="eye-container">
              <img src="/images/eye.svg" alt="eye" onClick={switchShown} />
            </div>
          </div>
        </form>
        <p id="forgot">¿Olvidaste tu contraseña?</p>
      </div>
      <div className="register-container">
        <button className="btn-register">Registrate</button>
        <p>
          ¿Ya ténes una cuenta? <span>Iniciá sesión</span>
        </p>
      </div>
    </main>
  );
}

export default Login;
