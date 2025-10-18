import React from "react";
import "./Services.css";
import { FaTruck, FaShieldAlt, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const items = [
  { icon: <FaTruck />, title: "Envíos Nacionales", text: "Paquetería confiable dentro de México, rápida y segura." },
  { icon: <FaShieldAlt />, title: "Seguro Express", text: "Protección total de tus envíos con cobertura completa." },
  { icon: <FaMapMarkedAlt />, title: "Cobertura USA", text: "Sucursales y centros de entrega en California y Nevada." },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
};

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Nuestros Servicios</h2>
        <motion.div 
          className="cards"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {items.map((it, i) => (
            <motion.div 
              key={i} 
              className="card"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10, boxShadow: "0 20px 30px rgba(0,163,74,0.4)" }}
            >
              <motion.div 
                className="icon" 
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {it.icon}
              </motion.div>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
