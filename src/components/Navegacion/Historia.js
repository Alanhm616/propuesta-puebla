import React from "react";
import { motion } from "framer-motion";

import "./CSS/Historia.css";

const blockVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Historia = () => {
  return (
    <div className="history-page">
      {/* Sección de Cabecera (Hero) */}
      <section className="history-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            NUESTRA HISTORIA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Desde 2003, conectamos a México y Estados Unidos con soluciones de
            envío rápidas y confiables.
          </motion.p>
        </div>
      </section>

      <section className="history-content">
        <div className="container timeline">
          {" "}
          <motion.div
            className="timeline-item"
            variants={blockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              {" "}
              <h2>Nacimiento y Visión (2003)</h2>
              <p>
                Nuestra empresa nace en Tulcingo de Valle, Puebla, en el año
                2003 bajo el nombre de **DIAMANTE EXPRESS** importando y
                exportando paquetería al sur de Los Angeles, California.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="timeline-item"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: 0.1,
            }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <h2>Expansión en América del Norte</h2>
              <p>
                En 2005 cambiamos nuestro nombre a **PUEBLA EXPRESS**, aludiendo
                orgullosamente a nuestro lugar de origen.
              </p>
              <p>
                Actualmente contamos en USA con Sucursales y Centros de Envío a
                lo largo del Estado de California, Estado de Washington y en Las
                Vegas Nevada.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="timeline-item"
            variants={blockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <h2>La Promesa de Puebla Express</h2>
              <p>
                En México contamos con más de 200 Sucursales y Centros de
                Entrega. Diariamente nos esforzamos en mejorar para brindar a
                nuestros clientes lo mejor de nosotros.
              </p>
              <p>¡Gracias por ser parte de nuestra historia!</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Historia;
