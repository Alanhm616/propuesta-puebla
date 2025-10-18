import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import heroImage from "../assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <motion.div
          className="hero-left"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1>Conectamos Puebla con el mundo desde 2003</h1>
          <p className="lead">Envíos y mudanzas confiables, personalizados y con seguimiento en tiempo real.</p>
          <div className="hero-actions">
            <a href="#formulario" className="btn-primary">Solicitar Servicio</a>
            <a href="#services" className="btn-outline">Ver Servicios</a>
          </div>
          <div className="hero-quick">
            <div><strong>+200</strong><span>Sucursales MÉX</span></div>
            <div><strong>USA</strong><span>Centros en CA & NV</span></div>
            <div><strong>2003</strong><span>Fundada</span></div>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="hero-card">
            <img src={heroImage} alt="Puebla Express" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;




