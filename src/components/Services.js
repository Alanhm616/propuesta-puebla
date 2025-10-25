import React from "react";

import "./Services.css";
import { FaTruck, FaShieldAlt, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const items = [
  {
    icon: <FaTruck />,
    title: "Envíos Nacionales",
    text: "Paquetería confiable dentro de México, rápida y segura.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Seguro Express",
    text: "Protección total de tus envíos con cobertura completa.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Cobertura USA",
    text: "Sucursales y centros de entrega en California y Nevada.",
  },
];

const cardVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.7,
    },
  },
};

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Nuestros Servicios</h2>
        <motion.div
          className="service-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {items.map((it, i) => (
            <motion.div
              key={i}
              className="list-item"
              variants={cardVariants}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                scale: 1.02,
                backgroundColor: "var(--color-light-gray)",
              }}
            >
              <div className="list-icon-wrap">
                <div className="list-icon">{it.icon}</div>
              </div>
              <div className="list-body">
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
