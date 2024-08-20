import React from "react";
import { useForm } from "../hooks/useForm";

export const ContactoScreen = () => {

  const initialForm = {
    nombre: "",
    correo: "",
    descripcion: "",
  };

  const { formState, nombre, correo, descripcion, onInputChange } =
    useForm(initialForm);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <div className="container mt-5" data-aos="zoom-in-up">
      <div className="card" style={{ maxWidth: "800px", margin: "auto" }}>
        <div className="d-flex">
          <div className="flex-shrink-0">
            <img
              src="https://via.placeholder.com/400x300"
              className="img-fluid rounded-start"
              alt="Imagen de contacto"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="p-4 flex-fill">
            <h4>Contacto</h4>
            <form action="" onSubmit={onSubmit} className="mb-3">
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  placeholder="Escribe tu nombre"
                  value={nombre}
                  onChange={onInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="correo" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="correo"
                  placeholder="Escribe tu correo"
                  value={correo}
                  onChange={onInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">
                  Descripción
                </label>
                <textarea
                  className="form-control"
                  name="descripcion"
                  rows="3"
                  placeholder="Escribe una descripción"
                  style={{ resize: "none" }}
                  maxLength="200"
                  value={descripcion}
                  onChange={onInputChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
