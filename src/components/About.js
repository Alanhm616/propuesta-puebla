import React from "react";
import "./About.css";
import aboutImage from "../assets/about.jpg";
import { motion } from "framer-motion";
import fondo from "../assets/fondo.jpg";

const About = () => (
  <section
    id="about"
    className="about"
    style={{ backgroundImage: `url(${fondo})` }}
  >
    <div className="overlay"></div> {/* Capa oscura para contraste */}
    <div className="container about-grid">
      
      {/* Imagen de la empresa con efecto flotante */}
      <motion.div
        className="about-media"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <img src={aboutImage} alt="Acerca de Puebla Express" />
      </motion.div>

      {/* Texto de la sección */}
      <motion.div
        className="about-body"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>ACERCA DE PUEBLA-EXPRESS</h2>
        <h4>Nuestra historia</h4>
        <p>
          Nuestra empresa nace en Tulcingo de Valle, Puebla, en el año 2003 bajo
          el nombre de DIAMANTE EXPRESS enviando y trayendo paquetería al sur de
          Los Angeles, California.
        </p>
        <p>
          En 2005 cambiamos nuestro nombre a PUEBLA-EXPRESS, aludiendo orgullosamente
          a nuestro lugar de origen.
        </p>
        <p>
          Actualmente contamos en USA con Sucursales y Centros de Envío y Entrega
          a lo largo del Estado de California, y en Las Vegas Nevada.
        </p>
        <p>
          En México contamos con más de 200 Sucursales y Centros de Entrega. Diariamente
          nos esforzamos en mejorar para brindar a nuestros clientes lo mejor de nosotros!
        </p>
      </motion.div>

    </div>
  </section>
);

export default About;

