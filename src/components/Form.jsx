import { useState } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import "./Form.css";

const initialValues = {
  file: "",
  nombre: "",
  tel: "",
  email: "",
  password: "",
};

const telefono =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const registroSchema = Yup.object().shape({
  file: Yup.mixed().required("Imagen requerida"),
  nombre: Yup.string().required("Nombre requerido"),
  tel: Yup.string()
    .matches(telefono, "Teléfono inválido")
    .required("Teléfono requerido"),
  email: Yup.string().email("Email inválido").required("Email requerido"),
  password: Yup.string()
    .min(8, "Mínimo 8 caracteres")
    .max(20, "Máximo 20 caracteres")
    .required("Contraseña requerida"),
});

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
            <Field className="field" id="file" type="file" name="file" />
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
            <div className="error">{errors.password}</div>
          ) : null}
          <a href="#">¿Olvidaste tu contraseña?</a>
          <button type="submit" className="btn-register">
            Registrate
          </button>
        </form>
      )}
    </Formik>
  );
}

export default Form;
