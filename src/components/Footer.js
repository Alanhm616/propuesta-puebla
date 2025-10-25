import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faBan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// 1. Importamos el logo
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          {/* 2. Usamos el logo en lugar del texto simple */}
          <Link to="/" className="footer-logo-link">
            <img src={logo} alt="Puebla Express Logo" className="footer-logo" />
          </Link>
          <p className="footer-tagline">Conectando México y USA desde 2003</p>
        </div>

        {/* Los links ahora serán parte de un diseño más limpio */}
        <div className="footer-links-group">
          <Link to="/aviso-de-privacidad" className="footer-link-button">
            <FontAwesomeIcon icon={faFileAlt} className="footer-icon" />
            Aviso de privacidad
          </Link>

          <Link to="/articulos-prohibidos" className="footer-link-button">
            <FontAwesomeIcon icon={faBan} className="footer-icon" />
            Artículos prohibidos
          </Link>
        </div>

        <div className="footer-copy">
          © {new Date().getFullYear()} por Puebla Express. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
