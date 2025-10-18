import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <h3>Puebla Express</h3>
          <p>Conectando México y USA desde 2003</p>
        </div>

        <div className="footer-links">
          <a href="#about">Acerca</a>
          <a href="#services">Servicios</a>
          <a href="#formulario">Contacto</a>
        </div>

        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://wa.me/523311234567" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
        </div>

        <div className="footer-copy">
          © {new Date().getFullYear()} Puebla Express. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

