import React, { useState } from "react";
import "./Form.css";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaComment } from "react-icons/fa";

const Form = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    console.log("Formulario:", form);
  };

  return (
    <section id="formulario" className="form-section">
      <div className="container form-wrap">
        <motion.div
          className="form-card"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2>PONTE EN CONTACTO</h2>
          <form
            onSubmit={handleSubmit}
            className="lead-form"
            autoComplete="off"
          >
            <div className="row">
              <div className="input-group">
                <FaUser className="input-icon" />
                <input
                  name="nombre"
                  placeholder="Nombre completo"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <FaEnvelope className="input-icon" />
                <input
                  name="email"
                  type="email"
                  placeholder="Correo electrónico"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="input-group">
                <FaPhone className="input-icon" />
                <input
                  name="telefono"
                  placeholder="Teléfono"
                  value={form.telefono}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-group">
                <FaComment className="input-icon" />
                <textarea
                  name="mensaje"
                  placeholder="Descripción del envío / mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="actions">
              <button type="submit" className="btn-primary">
                Enviar solicitud
              </button>
              {sent && (
                <motion.div
                  className="sent-badge"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  ¡Enviado!
                </motion.div>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Form;
