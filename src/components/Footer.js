// Footer.js
import React, { useState } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faBan,
  faTruck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logo.png";

// Importamos el contenido de las páginas
import AvisoPrivacidad from "../components/piepagina/AvisoPrivacidad";
import ArticulosProhibidos from "../components/piepagina/ArticulosProhibidos";
import TerminosEnvio from "../components/Navegacion/TerminosEnvio";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (type) => {
    if (type === "aviso") {
      setModalTitle("Aviso de Privacidad");
      setModalContent(<AvisoPrivacidad />);
    } else if (type === "prohibidos") {
      setModalTitle("Artículos Prohibidos");
      setModalContent(<ArticulosProhibidos />);
    } else if (type === "terminos") {
      setModalTitle("Términos y Condiciones de Envío");
      setModalContent(<TerminosEnvio />);
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  return (
    <>
      <footer className="site-footer">
        <div className="container footer-inner">
          {/* Logo y lema */}
          <div className="footer-brand">
            <a href="/" className="footer-logo-link">
              <img src={logo} alt="Puebla Express Logo" className="footer-logo" />
            </a>
            <p className="footer-tagline">
              Conectando México y USA desde 2003
            </p>
          </div>

          {/* Botones de enlaces */}
          <div className="footer-links-group">
            <button onClick={() => openModal("aviso")} className="footer-link-button">
              <FontAwesomeIcon icon={faFileAlt} className="footer-icon" />
              Aviso de privacidad
            </button>

            <button onClick={() => openModal("prohibidos")} className="footer-link-button">
              <FontAwesomeIcon icon={faBan} className="footer-icon" />
              Artículos prohibidos
            </button>

            <button onClick={() => openModal("terminos")} className="footer-link-button">
              <FontAwesomeIcon icon={faTruck} className="footer-icon" />
              Términos y Condiciones de Envío
            </button>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="footer-social">
          <a
            href="https://www.facebook.com/puexpress"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://www.instagram.com/pueblaexpressusa"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-copy">
          © {new Date().getFullYear()} Puebla Express. Todos los derechos reservados.
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <h2 className="modal-title">{modalTitle}</h2>
            <div className="modal-body">{modalContent}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
