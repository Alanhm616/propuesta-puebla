import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import ModalRastreo from "./ModalRastreo";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      {/* Top bar con información rápida */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="top-left">
            <span>
              Atención al cliente:{" "}
              <a href="tel:+523311234567">+52 331 123 4567</a>
            </span>
          </div>
          <div className="top-right">
            <a
              href="https://wa.me/523311234567"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
      </div>

      {/* Header principal */}
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            {logo ? (
              <a href="#hero" className="brand-link">
                <img src={logo} alt="Puebla Express" className="brand-logo" />
              </a>
            ) : (
              <a href="#hero" className="brand-text">Puebla Express</a>
            )}
          </div>

          <nav className="nav">
            <a href="#hero">Inicio</a>
            <a href="#welcome">Bienvenidos</a>
            <a href="#services">Servicios</a>
            <a href="#about">Acerca</a>
            <a href="#insurance">Seguro</a>
            {/* Botón de Rastreo con Modal */}
            <button className="btn-ghost" onClick={handleOpenModal}>Rastreo</button>
          </nav>

          {/* Menú móvil */}
          <div className="hamburger" aria-hidden>
            <input id="menu-toggle" type="checkbox" />
            <label htmlFor="menu-toggle" className="menu-btn">
              <span></span>
            </label>
            <div className="mobile-menu">
              <a href="#hero">Inicio</a>
              <a href="#welcome">Bienvenidos</a>
              <a href="#services">Servicios</a>
              <a href="#about">Acerca</a>
              <a href="#insurance">Seguro</a>
              {/* Botón móvil Rastreo */}
              <button className="mobile-cta" onClick={handleOpenModal}>Rastreo</button>
            </div>
          </div>
        </div>
      </header>

      {/* Modal de Rastreo */}
      <ModalRastreo open={modalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Header;


