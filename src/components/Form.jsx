import { useState } from "react";
import { Formik, Field } from "formik";
import { registroSchema, initialValues } from "./FormValidation";
import "./Form.css";

function Form() {
  const [shown, setShown] = useState(false);

  const switchShown = function (e) {
    e.preventDefault();
    setShown(!shown);
  };

  const onSubmit = (values) => {
    console.log(values);
    alert("Usuario Registrado:  " + JSON.stringify(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={registroSchema}
    >
      {({ errors, touched, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="perfil-container">
            <img src="/images/icono.svg" alt="perfil" />
            <Field
              className="field"
              id="file"
              type="file"
              name="file"
              accept="image/*"
            />
            <label htmlFor="file">Subí tu foto de perfil</label>
          </div>
          {touched.file && errors.file ? (
            <div className="error">{errors.file}</div>
          ) : null}
          <Field
            className="field"
            type="text"
            placeholder="Nombre y Apellido"
            name="nombre"
          />
          {touched.nombre && errors.nombre ? (
            <div className="error">{errors.nombre}</div>
          ) : null}
          <Field
            className="field"
            type="tel"
            placeholder="+54 9 221 000 0000"
            name="tel"
          />
          {touched.tel && errors.tel ? (
            <div className="error">{errors.tel}</div>
          ) : null}
          <Field
            className="field"
            type="email"
            placeholder="hola@tuemail.com"
            name="email"
          />
          {touched.email && errors.email ? (
            <div className="error">{errors.email}</div>
          ) : null}
          <div className="password-container">
            <Field
              className="field"
              id="password"
              name="password"
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
          {touched.password && errors.password ? (
            <div id="password-error" className="error">
              {errors.password}
            </div>
          ) : (
            <a href="#">¿Olvidaste tu contraseña?</a>
          )}

          <button type="submit" className="btn-register">
            Registrate
          </button>
        </form>
      )}
    </Formik>
  );
}

export default Form;
