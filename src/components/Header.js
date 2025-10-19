import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.png";
import ModalRastreo from "./ModalRastreo";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleNavLinkClick = (e, targetId) => {
    if (location.pathname !== "/") {
      return;
    }

    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
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

      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            {logo ? (
              <Link to="/" className="brand-link" onClick={handleLogoClick}>
                <img src={logo} alt="Puebla Express" className="brand-logo" />
              </Link>
            ) : (
              <Link to="/" className="brand-text" onClick={handleLogoClick}>
                Puebla Express
              </Link>
            )}
          </div>

          {/* Navegación Desktop */}
          <nav className="nav">
            <Link to="/" onClick={(e) => handleNavLinkClick(e, "hero")}>
              Inicio
            </Link>
            <Link to="/" onClick={(e) => handleNavLinkClick(e, "welcome")}>
              Bienvenidos
            </Link>
            <Link to="/" onClick={(e) => handleNavLinkClick(e, "services")}>
              Servicios
            </Link>
            <Link to="/" onClick={(e) => handleNavLinkClick(e, "about")}>
              Acerca
            </Link>
            <Link to="/" onClick={(e) => handleNavLinkClick(e, "insurance")}>
              Seguro
            </Link>

            <Link to="/cobertura-usa">COBERTURA en USA</Link>
            <Link to="/importaciones">ONLINE Importaciones</Link>
            <Link to="/terminos">Términos y Condiciones de Envío</Link>
            <Link to="/historia">HISTORIA</Link>

            {/* Botón de Rastreo con Modal */}
            <button className="btn-ghost" onClick={handleOpenModal}>
              Rastreo
            </button>
          </nav>

          {/* Menú móvil */}
          <div className="hamburger" aria-hidden>
            <input id="menu-toggle" type="checkbox" />
            <label htmlFor="menu-toggle" className="menu-btn">
              <span></span>
            </label>
            <div className="mobile-menu">
              <Link to="/" onClick={(e) => handleNavLinkClick(e, "hero")}>
                Inicio
              </Link>
              <Link to="/" onClick={(e) => handleNavLinkClick(e, "welcome")}>
                Bienvenidos
              </Link>
              <Link to="/" onClick={(e) => handleNavLinkClick(e, "services")}>
                Servicios
              </Link>
              <Link to="/" onClick={(e) => handleNavLinkClick(e, "about")}>
                Acerca
              </Link>
              <Link to="/" onClick={(e) => handleNavLinkClick(e, "insurance")}>
                Seguro
              </Link>

              <Link to="/cobertura-usa">COBERTURA en USA</Link>
              <Link to="/importaciones">ONLINE Importaciones</Link>
              <Link to="/terminos">Términos y Condiciones de Envío</Link>
              <Link to="/historia">HISTORIA</Link>

              {/* Botón móvil Rastreo */}
              <button className="mobile-cta" onClick={handleOpenModal}>
                Rastreo
              </button>
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
