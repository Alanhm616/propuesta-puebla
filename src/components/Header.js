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
    if (location.pathname !== "/") return;
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
    }
  };

  const handleLogoClick = () => window.scrollTo(0, 0);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="top-left">
            <span>
              Atención al cliente:
              <a href="tel:+523311234567">+52 331 123 4567</a>
            </span>
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

          <div className="header-nav-actions">
            <nav className="nav">
              <Link to="/" onClick={(e) => handleNavLinkClick(e, "hero")}>
                Inicio
              </Link>
              <Link to="/cobertura-usa">Cobertura En USA</Link>
              <Link to="/importaciones">Online Importaciones</Link>
              <Link to="/historia">Historia</Link>
            </nav>

            <button className="btn-rastreo" onClick={handleOpenModal}>
              Rastreo
            </button>
          </div>

          <div className="hamburger" aria-hidden>
            <input id="menu-toggle" type="checkbox" />
            <label htmlFor="menu-toggle" className="menu-btn">
              <span></span>
            </label>
            <div className="mobile-menu">
              <Link to="/" onClick={(e) => handleNavLinkClick(e, "hero")}>
                Inicio
              </Link>
              <Link to="/cobertura-usa">Cobertura En USA</Link>
              <Link to="/importaciones">Online Importaciones</Link>
              <Link to="/historia">Historia</Link>

              <button className="mobile-cta" onClick={handleOpenModal}>
                Rastreo
              </button>
            </div>
          </div>
        </div>
      </header>

      <ModalRastreo open={modalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Header;
