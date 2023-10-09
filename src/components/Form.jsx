import { useState } from "react";
import { Formik, Field } from "formik";
import { registroSchema, initialValues } from "./FormValidation";
import Axios from "axios";
import { Image } from "cloudinary-react";
import "./Form.css";

function Form() {
  const [shown, setShown] = useState(false);
  const [file, setFile] = useState("");

  const switchShown = function (e) {
    e.preventDefault();
    setShown(!shown);
  };

  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "vzjyfhl8");

    Axios.post(
      "https://api.cloudinary.com/v1_1/dwxhpn7u9/image/upload",
      formData
    ).then((res) => {
      setFile(res.data.url);
    });
  };

  const onSubmit = (values) => {
    alert("Usuario Registrado:  " + JSON.stringify(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={registroSchema}
    >
      {({ values, errors, touched, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="perfil-container">
            {file ? (
              <Image className="perfil" cloudName="dwxhpn7u9" publicId={file} />
            ) : (
              <img src="/images/icono.svg" alt="perfil" />
            )}
            <Field
              className="field"
              id="file"
              value={values.file}
              type="file"
              name="file"
              accept="image/*"
              onChange={(event) => uploadImage(event.target.files)}
            />
            <label htmlFor="file">Subí tu foto de perfil</label>
          </div>
          {touched.file && errors.file ? (
            <div className="error">{errors.file}</div>
          ) : null}
          <Field
            className="field"
            type="text"
            value={values.nombre}
            placeholder="Nombre y Apellido"
            name="nombre"
          />
          {touched.nombre && errors.nombre ? (
            <div className="error">{errors.nombre}</div>
          ) : null}
          <Field
            className="field"
            type="tel"
            value={values.tel}
            placeholder="+54 9 221 000 0000"
            name="tel"
          />
          {touched.tel && errors.tel ? (
            <div className="error">{errors.tel}</div>
          ) : null}
          <Field
            className="field"
            type="email"
            value={values.email}
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
              value={values.password}
              name="password"
              type={shown ? "text" : "password"}
              placeholder="Ingresá tu contraseña"
            />
            <div className="eye-container">
              <img
                className="eye"
                src={shown ? "images/eye.svg" : "/images/eye-closed.png"}
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
