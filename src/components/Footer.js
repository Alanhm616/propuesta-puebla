import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faBan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; // 👈 Importante

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <h3>Puebla Express</h3>
        </div>

        <div className="footer-links">
          <Link to="/aviso-de-privacidad">
            <FontAwesomeIcon icon={faFileAlt} className="footer-icon" />
            Aviso de privacidad
          </Link>

          <Link to="/articulos-prohibidos">
            <FontAwesomeIcon icon={faBan} className="footer-icon" />
            Artículos prohibidos
          </Link>
        </div>

        <div className="footer-copy">
          © {new Date().getFullYear()} por Puebla Express.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

