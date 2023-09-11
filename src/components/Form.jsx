import { useState } from "react";
import { useFormik } from "formik";
import "./Form.css";

function Form() {
  const [shown, setShown] = useState(false);
  const switchShown = function (e) {
    e.preventDefault();
    setShown(!shown);
  };
  const { handleChange, handleSubmit } = useFormik({
    initialValues: {
      file: null,
      nombre: "",
      tel: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      alert("Usuario Registrado:  " + JSON.stringify(values));
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="perfil-container">
        <img src="/images/icono.svg" alt="perfil" />
        <input id="file" type="file" name="file" onChange={handleChange} />
        <label htmlFor="file">Subí tu foto de perfil</label>
      </div>
      <input
        type="text"
        placeholder="Nombre y Apellido"
        name="nombre"
        onChange={handleChange}
      />
      <input
        type="tel"
        placeholder="+54 9 221 000 0000"
        name="tel"
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="hola@tuemail.com"
        name="email"
        onChange={handleChange}
      />
      <div className="password-container">
        <input
          id="password"
          name="password"
          onChange={handleChange}
          type={shown ? "text" : "password"}
          placeholder="Ingresá tu contraseña"
        />
        <div className="eye-container">
          <img
            className="eye"
            src={shown ? "images/eye-closed.png" : "/images/eye.svg"}
            alt="eye"
            onClick={switchShown}
          />
        </div>
      </div>
      <a href="#">¿Olvidaste tu contraseña?</a>
      <button type="submit" className="btn-register">
        Registrate
      </button>
    </form>
  );
}

export default Form;
