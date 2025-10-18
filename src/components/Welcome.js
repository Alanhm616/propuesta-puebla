import React from "react";
import "./Welcome.css";
import { FaTruck, FaMapMarkedAlt, FaClock } from "react-icons/fa"; // iconos

const Welcome = () => {
  return (
    <section id="welcome" className="welcome">
      <div className="welcome-content">
        <h2>¡Bienvenidos!</h2>
        <p>
          En nuestro equipo, nos enorgullece ofrecer lo mejor de nosotros a nuestros
          clientes desde el año 2003. Nos aseguramos de personalizar nuestras ofertas
          para satisfacer sus necesidades específicas. ¡Gracias por confiar en nosotros!
        </p>

        <div className="welcome-icons">
          <div className="icon-box">
            <FaTruck size={40} />
            <p>Envíos confiables</p>
          </div>
          <div className="icon-box">
            <FaMapMarkedAlt size={40} />
            <p>Seguimiento en tiempo real</p>
          </div>
          <div className="icon-box">
            <FaClock size={40} />
            <p>Rápido y seguro</p>
          </div>
        </div>

        <a href="#formulario" className="btn-primary welcome-btn">Solicitar Servicio</a>
      </div>
    </section>
  );
};

export default Welcome;

